import L from "leaflet";
import "leaflet-draw";

export class MapBoundaryEditor extends HTMLElement {
  private map?: L.Map;
  private drawnItems = new L.FeatureGroup();

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

  private initMap() {
    const mapEl = this.shadowRoot!.getElementById("map") as HTMLElement;

    this.map = L.map(mapEl).setView([-6.2, 106.8], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);

    this.map.addLayer(this.drawnItems);
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
      this.drawnItems.clearLayers();
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
  // Public API (v0.1)
  // =========================

  getGeoJSON() {
    return this.drawnItems.toGeoJSON();
  }

  setGeoJSON(geojson: any) {
    if (!this.map) return;

    this.drawnItems.clearLayers();

    const layer = L.geoJSON(geojson, {
      onEachFeature: (_, l) => {
        this.drawnItems.addLayer(l);
      },
    });

    // zoom map to boundary
    const bounds = layer.getBounds();
    if (bounds.isValid()) {
      this.map.fitBounds(bounds);
    }

    this.emitChange();
  }

  clear() {
    this.drawnItems.clearLayers();
    this.emitChange();
  }
}

customElements.define("map-boundary-editor", MapBoundaryEditor);
