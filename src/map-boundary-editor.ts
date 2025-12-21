import L from "leaflet";
import "leaflet-draw";

export class MapBoundaryEditor extends HTMLElement {
  private map?: L.Map;
  private drawnItems = new L.FeatureGroup();
  private drawControl?: L.Control.Draw;
  private readonly = false;
  private boundaryLayer?: L.GeoJSON;
  private isReady = false;
  private isGeolocating = false;
  private pendingActions: (() => void)[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        #map {
          width: 100%;
          height: 100%;
          min-height: 300px;
        }
      </style>

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.css"
      />

      <div id="map"></div>
    `;

    this.initMap();
    this.initDraw();
  }

  private runOrQueue(action: () => void) {
    if (!this.isReady) {
      this.pendingActions.push(action);
      return;
    }
    action();
  }

  private initMap() {
    const mapEl = this.shadowRoot!.getElementById("map") as HTMLElement;

    this.map = L.map(mapEl).setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);

    this.map.addLayer(this.drawnItems);

    this.isReady = true;

    this.pendingActions.forEach((fn) => fn());
    this.pendingActions = [];

    this.maybeUseGeolocation();
  }

  private initDraw() {
    if (!this.map) return;

    this.drawControl = new L.Control.Draw({
      edit: {
        featureGroup: this.drawnItems,
      },
      draw: {
        polygon: {},
        polyline: false,
        rectangle: false,
        circle: false,
        marker: false,
        circlemarker: false,
      },
    });

    this.map.addControl(this.drawControl);

    // CREATE
    this.map.on(L.Draw.Event.CREATED, (e: any) => {
      const layer = e.layer;

      layer.setStyle({
        color: "#1d4ed8",
        weight: 3,
        opacity: 1,

        fillColor: "#3b82f6",
        fillOpacity: 0.35,
      });

      this.drawnItems.addLayer(layer);
      this.emitChange();
    });

    // EDIT
    this.map.on(L.Draw.Event.EDITED, (e: any) => {
      e.layers.eachLayer((layer: any) => {
        layer.setStyle({
          color: "#1d4ed8",
          weight: 3,
          fillColor: "#3b82f6",
          fillOpacity: 0.35,
        });
      });

      this.emitChange();
    });

    // DELETE
    this.map.on(L.Draw.Event.DELETED, () => {
      this.emitChange();
    });
  }

  private emitChange() {
    const geojson = this.getGeoJSON();

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { geojson },
      })
    );
  }

  // =========================
  // Public API (v0.3)
  // =========================
  async enableGeolocation() {
    if (!this.map) {
      return {
        status: "error",
        error: { message: "Map is not ready" },
      };
    }

    if (!("geolocation" in navigator)) {
      return {
        status: "error",
        error: { message: "Geolocation not supported" },
      };
    }

    if (this.isGeolocating) {
      return {
        status: "pending",
      };
    }

    this.isGeolocating = true;

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;

          this.map!.setView([latitude, longitude], 13);
          this.isGeolocating = false;

          this.dispatchEvent(
            new CustomEvent("geolocation:success", {
              detail: { lat: latitude, lng: longitude },
            })
          );

          resolve({
            status: "granted",
            position: { lat: latitude, lng: longitude },
          });
        },
        (err) => {
          this.isGeolocating = false;

          this.dispatchEvent(
            new CustomEvent("geolocation:error", {
              detail: err,
            })
          );

          resolve({
            status: "denied",
            error: {
              code: err.code,
              message: err.message,
            },
          });
        }
      );
    });
  }

  getGeoJSON() {
    return this.drawnItems.toGeoJSON();
  }

  setGeoJSON(geojson: any) {
    this.runOrQueue(() => {
      if (!this.map) return;

      this.drawnItems.clearLayers();

      const layerGroup = L.geoJSON(geojson, {
        onEachFeature: (_, layer) => {
          this.drawnItems.addLayer(layer);
        },
      });

      const bounds = layerGroup.getBounds();
      if (bounds.isValid()) {
        this.map.fitBounds(bounds);
      }

      this.emitChange();
    });
  }

  clear() {
    this.runOrQueue(() => {
      if (!this.drawnItems) return;

      this.drawnItems.clearLayers();
      this.emitChange();
    });
  }

  getBoundary() {
    return this.boundaryLayer ? this.boundaryLayer.toGeoJSON() : null;
  }

  setBoundary(geojson: any) {
    this.runOrQueue(() => {
      if (!this.map) return;

      // remove existing boundary
      if (this.boundaryLayer) {
        this.map.removeLayer(this.boundaryLayer);
        this.boundaryLayer = undefined;
      }

      // create boundary with proper style
      this.boundaryLayer = L.geoJSON(geojson, {
        interactive: false,
        style: {
          color: "#2563eb",
          weight: 2,
          opacity: 0.9,

          fillColor: "#2563eb",
          fillOpacity: 0.05, // KEY: very light fill

          dashArray: "6 6",
        },
      });

      this.boundaryLayer.addTo(this.map);

      const bounds = this.boundaryLayer.getBounds();
      if (bounds.isValid()) {
        this.map.fitBounds(bounds);
      }
    });
  }

  clearBoundary() {
    this.runOrQueue(() => {
      if (!this.map || !this.boundaryLayer) return;
      this.map.removeLayer(this.boundaryLayer);
      this.boundaryLayer = undefined;
    });
  }

  setReadonly(value: boolean) {
    this.runOrQueue(() => {
      if (!this.map || !this.drawControl) return;
      if (this.readonly === value) return;

      this.readonly = value;

      if (value) {
        this.map.removeControl(this.drawControl);
      } else {
        this.map.addControl(this.drawControl);
      }
    });
  }

  isReadonly() {
    return this.readonly;
  }

  setView(lat: number, lng: number, zoom?: number) {
    this.runOrQueue(() => {
      if (!this.map) return;

      if (typeof zoom === "number") {
        this.map.setView([lat, lng], zoom);
      } else {
        this.map.panTo([lat, lng]);
      }
    });
  }
}

customElements.define("map-boundary-editor", MapBoundaryEditor);
