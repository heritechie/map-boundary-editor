# map-boundary-editor

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

## Basic Usage

```html
<map-boundary-editor style="width: 800px; height: 500px;"></map-boundary-editor>

<script>
  const editor = document.querySelector("map-boundary-editor");

  editor.addEventListener("change", (e) => {
    console.log("GeoJSON:", e.detail.geojson);
  });
</script>
```

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

`getGeoJSON(): GeoJSON`

Returns the current boundary as GeoJSON.

`setGeoJSON(geojson: GeoJSON): void`

Loads a boundary from GeoJSON and renders it on the map.

`clear(): void`

Removes the current boundary.

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

- v0.2: multiple boundaries (FeatureCollection)
- v0.3: read-only mode
- v0.4: additional map engine adapters (MapLibre, Google Maps)
- v1.0: stable API

---
