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

  static get observedAttributes() {
    return ["use-geolocation"];
  }

  isReadonly() {
    return this.readonly;
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

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    newValue: string | null
  ) {
    if (name === "use-geolocation") {
      // attribute added
      if (newValue !== null) {
        this.runOrQueue(() => {
          this.maybeUseGeolocation();
        });
      }
    }
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
      this.drawnItems.addLayer(e.layer);
      this.emitChange();
    });

    // EDIT
    this.map.on(L.Draw.Event.EDITED, () => {
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

  private maybeUseGeolocation() {
    if (!this.map) return;
    if (!this.hasAttribute("use-geolocation")) return;
    if (!navigator.geolocation) return;
    if (this.isGeolocating) return;

    this.isGeolocating = true;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        this.map!.setView([latitude, longitude], 13);
      },
      () => {
        this.isGeolocating = false;
      }
    );
  }

  // =========================
  // Public API (v0.3)
  // =========================

  getGeoJSON() {
    if (!this.drawnItems) {
      return {
        type: "FeatureCollection",
        features: [],
      };
    }

    return this.drawnItems.toGeoJSON();
  }

  setGeoJSON(geojson: any) {
    this.runOrQueue(() => {
      if (!this.map || !this.drawnItems) return;

      this.drawnItems.clearLayers();

      const layerGroup = L.geoJSON(geojson, {
        onEachFeature: (_, layer) => {
          this.drawnItems!.addLayer(layer);
        },
      });

      const bounds = layerGroup.getBounds();
      if (bounds.isValid()) {
        this.map.fitBounds(bounds);
      }

      this.emitChange();
    });
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

  setReadonly(value: boolean) {
    this.runOrQueue(() => {
      if (!this.map || !this.drawControl) return;

      this.readonly = value;

      if (value) {
        this.map.removeControl(this.drawControl);
      } else {
        this.map.addControl(this.drawControl);
      }
    });
  }

  getBoundary() {
    return this.boundaryLayer ? this.boundaryLayer.toGeoJSON() : null;
  }

  setBoundary(geojson: any) {
    this.runOrQueue(() => {
      if (!this.map) return;

      if (this.boundaryLayer) {
        this.map.removeLayer(this.boundaryLayer);
        this.boundaryLayer = undefined;
      }

      this.boundaryLayer = L.geoJSON(geojson, {
        interactive: false,
      });

      this.boundaryLayer.addTo(this.map);

      const bounds = this.boundaryLayer.getBounds();
      if (bounds.isValid()) {
        this.map.fitBounds(bounds);
      }
    });
  }

  clear() {
    this.runOrQueue(() => {
      if (!this.drawnItems) return;

      this.drawnItems.clearLayers();
      this.emitChange();
    });
  }
}

customElements.define("map-boundary-editor", MapBoundaryEditor);
