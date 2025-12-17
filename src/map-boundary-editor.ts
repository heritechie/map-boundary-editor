import L from "leaflet";

export class MapBoundaryEditor extends HTMLElement {
  private map?: L.Map;

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

      <div id="map"></div>
    `;

    this.initMap();
  }

  initMap() {
    const mapEl = this.shadowRoot!.getElementById("map") as HTMLElement;

    this.map = L.map(mapEl).setView([-6.2, 106.8], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);
  }
}

customElements.define("map-boundary-editor", MapBoundaryEditor);
