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

      <!-- Leaflet CSS -->
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <!-- Leaflet Draw CSS -->
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.css"
      />

      <div id="map"></div>
    `;

    this.initMap();
    this.initDraw();
  }

  initMap() {
    const mapEl = this.shadowRoot!.getElementById("map") as HTMLElement;

    this.map = L.map(mapEl).setView([-6.2, 106.8], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);

    this.map.addLayer(this.drawnItems);
  }

  initDraw() {
    if (!this.map) return;

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: this.drawnItems,
      },
      draw: {
        polygon: true,
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
      this.drawnItems.clearLayers(); // single-boundary
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

  emitChange() {
    const geojson = this.drawnItems.toGeoJSON();

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { geojson },
      })
    );
  }

  // === Public API (v0.1) ===

  getGeoJSON() {
    return this.drawnItems.toGeoJSON();
  }

  clear() {
    this.drawnItems.clearLayers();
    this.emitChange();
  }
}

customElements.define("map-boundary-editor", MapBoundaryEditor);
