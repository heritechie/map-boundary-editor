# map-boundary-editor

[![npm](https://img.shields.io/npm/v/map-boundary-editor)](https://www.npmjs.com/package/map-boundary-editor)
[![license](https://img.shields.io/npm/l/map-boundary-editor)](LICENSE)
[![downloads](https://img.shields.io/npm/dm/map-boundary-editor)](https://www.npmjs.com/package/map-boundary-editor)

**map-boundary-editor** is a generic, embeddable, map-based boundary editor
implemented as a Web Component.

It allows users to visually draw and edit a geographic boundary
and outputs a standard **GeoJSON** representation that can be reused
across different map engines and backend systems.

---

## Why map-boundary-editor?

Many applications need users to define geographic areas:

- delivery zones
- service coverage
- eligibility rules
- geofencing configuration

Most teams end up rebuilding the same map drawing logic again and again,
tightly coupled to a specific map provider.

**map-boundary-editor** solves this by providing:

- a reusable boundary authoring UI
- a stable and minimal API
- engine-agnostic GeoJSON output

---

## Features (v0.1)

- Draw, edit, and delete a polygon boundary
- Leaflet-based (no API key required)
- Outputs standard GeoJSON (RFC 7946)
- Framework-agnostic (Web Component)
- Easy to embed in any web application

> Note: v0.1 supports a single boundary only.

---

## Installation

### Via npm

```bash
npm install map-boundary-editor
```

---

### Via script tag

```html
<script src="map-boundary-editor.min.js"></script>
```

---

## Basic Usage (Recommended)

Use module scripts only to ensure correct loading order.

```html
<map-boundary-editor id="editor" style="width: 800px; height: 500px;">
</map-boundary-editor>

<script type="module">
  import "map-boundary-editor";

  const editor = document.getElementById("editor");

  // Public APIs are lifecycle-safe
  editor.setView(-6.2, 106.8, 11);

  editor.addEventListener("change", (e) => {
    console.log("GeoJSON:", e.detail.geojson);
  });
</script>
```

> Note: All public APIs (`setView`, `setGeoJSON`, `clear`) are safe to call immediately after the element is created. No `setTimeout` or `customElements.whenDefined` is required.

---

## Setting Initial View

```js
editor.setView(lat, lng, zoom);
```

If a boundary is later loaded using setGeoJSON, the map will automatically fit to the boundary.

---

## Loading an Existing Boundary

```js
editor.setGeoJSON({
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [106.8166, -6.2],
        [106.82, -6.21],
        [106.83, -6.205],
        [106.8166, -6.2],
      ],
    ],
  },
  properties: {},
});
```

---

## Public API (v0.1)

`getGeoJSON(): FeatureCollection`

Returns the current boundaries as GeoJSON.

`setGeoJSON(geojson: FeatureCollection): void`

Loads boundaries from GeoJSON and renders them on the map.

`setView(lat: number, lng: number, zoom?: number): void`

Moves the map to the specified location.

`clear(): void`

Removes all boundaries.

---

## Events

`change`

Fired whenever the boundary is created, edited, or deleted.

```js
editor.addEventListener("change", (e) => {
  console.log(e.detail.geojson);
});
```

---

## Data Format

The editor uses GeoJSON as its data contract.

GeoJSON is treated as the single source of truth and is intentionally decoupled
from any specific map engine.

The output is compatible with:

- Google Maps Data Layer
- Mapbox / MapLibre
- Backend GIS libraries (PostGIS, Shapely, Turf.js)

---

## Roadmap

- v0.2.x: optional geolocation-based initial view (opt-in)
- v0.3: read-only mode
- v0.4: additional map engine adapters (MapLibre, Google Maps)
- v1.0: stable API

---
