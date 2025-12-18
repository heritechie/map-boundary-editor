import L from "leaflet";
import "leaflet-draw";

export class MapBoundaryEditor extends HTMLElement {
  private map?: L.Map;
  private drawnItems = new L.FeatureGroup();
  private isReady = false;
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
  }

  private initDraw() {
    if (!this.map) return;

    const drawControl = new L.Control.Draw({
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

    this.map.addControl(drawControl);

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

  // =========================
  // Public API (v0.2)
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

  clear() {
    this.runOrQueue(() => {
      if (!this.drawnItems) return;

      this.drawnItems.clearLayers();
      this.emitChange();
    });
  }
}

customElements.define("map-boundary-editor", MapBoundaryEditor);
