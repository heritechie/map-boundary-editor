export class MapBoundaryEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
        <style>
          #map {
            width: 100%;
            height: 100%;
            min-height: 300px;
          }
        </style>
        <div id="map"></div>
      `;
  }
}

customElements.define("map-boundary-editor", MapBoundaryEditor);
