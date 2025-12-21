# map-boundary-editor

[![npm](https://img.shields.io/npm/v/map-boundary-editor)](https://www.npmjs.com/package/map-boundary-editor)
[![license](https://img.shields.io/npm/l/map-boundary-editor)](LICENSE)
[![downloads](https://img.shields.io/npm/dm/map-boundary-editor)](https://www.npmjs.com/package/map-boundary-editor)

**map-boundary-editor** is a lightweight, embeddable map-based boundary editor
designed for defining and validating geographic service boundaries.

It is optimized for use cases where a **user-defined area (polygon)** must be
evaluated against a **fixed administrative or reference boundary** — such as
service eligibility, coverage restriction, or zoning rules.

---

## Why map-boundary-editor?

Many applications need users to define geographic areas:

- delivery zones
- service coverage
- eligibility rules
- geofencing configuration

A common requirement in these use cases is a clear separation between
**editable user input** and **non-editable reference boundaries**.

Most teams end up rebuilding the same map drawing logic again and again,
tightly coupled to a specific map provider.

**map-boundary-editor** solves this by providing:

- a reusable boundary authoring UI
- a stable and minimal API
- engine-agnostic GeoJSON output

---

## Key Concepts

### Editable Polygon

A polygon created or modified by the user to represent an area of interest
(e.g. delivery zone, service coverage).

### Reference Boundary

A fixed, non-editable boundary used as a reference for validation or restriction.
Typical examples include cities, provinces, or regulatory zones.

### Readonly Mode

A mode where editing controls are disabled, allowing the map to be used purely
for visualization, review, or approval workflows.

---

## Features

- Draw, edit, and delete **editable polygon** boundaries
- Support for fixed, non-editable **reference boundaries**
- Read-only mode for review or visualization use cases
- Supports multiple editable boundaries (GeoJSON `FeatureCollection`)
- No vendor lock-in or API keys required

---

## Installation

### Via npm

```bash
npm install map-boundary-editor
```

---

## Basic Usage (Recommended)

The most common usage pattern is defining an editable area **within** a fixed reference boundary.

```html
<map-boundary-editor
  id="editor"
  style="width: 800px; height: 500px;"
></map-boundary-editor>

<script type="module">
  import "map-boundary-editor";

  const editor = document.getElementById("editor");

  // Set a fixed reference boundary (e.g. administrative area)
  editor.setBoundary({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [106.69, -6.1],
              [107.03, -6.1],
              [107.03, -6.38],
              [106.69, -6.38],
              [106.69, -6.1],
            ],
          ],
        },
        properties: {},
      },
    ],
  });

  // Listen for user-defined polygon changes
  editor.addEventListener("change", (e) => {
    console.log("Editable GeoJSON:", e.detail.geojson);
  });
</script>
```

> All public APIs (`setView`, `setGeoJSON`, `clear`, etc.) are safe to call
> immediately after the element is created.
> No `setTimeout` or `customElements.whenDefined` is required.

---

### Loading an Existing Editable Boundary

```js
editor.setGeoJSON({
  type: "FeatureCollection",
  features: [
    {
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
    },
  ],
});
```

Even when loading a single boundary, the data must be wrapped in a `FeatureCollection` for consistency.

---

### View Control

```js
editor.setView(lat, lng, zoom);
```

If editable boundaries are later loaded using `setGeoJSON`, the map will automatically fit to the boundary.

---

### Geolocation

Geolocation must be triggered explicitly from a user interaction due to browser permission requirements.

```js
editor.enableGeolocation();
```

---

## Public API (v0.3)

### Editable Polygon

`setGeoJSON(geojson: FeatureCollection): void`

Loads editable polygon boundaries from GeoJSON.

`getGeoJSON(): FeatureCollection`

Returns the current editable polygon boundaries.

`clear(): void`

Removes all editable polygon boundaries.

---

### Reference Boundary

`setBoundary(geojson: FeatureCollection): void`

Sets a fixed, non-editable reference boundary.

`getBoundary(): FeatureCollection | null`

Returns the current reference boundary.

`clearBoundary(): void`

Removes the reference boundary from the map.

---

### Mode Control

`setReadonly(value: boolean): void`

Enables or disables editing controls.

`isReadonly(): boolean`

Returns the current readonly state.

---

### View Control

`setView(lat: number, lng: number, zoom?: number): void`

Moves the map to the specified location.

## Events

### change

Fired whenever the editable polygon is created, edited, or deleted.

```js
editor.addEventListener("change", (e) => {
  console.log(e.detail.geojson);
});
```

---

## Data Format

The editor uses GeoJSON as its data contract.

GeoJSON is treated as the single source of truth and is intentionally decoupled from any specific map engine.

The output is compatible with:

- Google Maps Data Layer
- Mapbox / MapLibre
- Backend GIS libraries (PostGIS, Shapely, Turf.js)

---

## Demo

A demo is included in the repository to showcase:

- Editable polygons vs administrative reference boundaries
- Visual hierarchy between reference and user-defined areas
- Readonly vs editable interaction modes

Live demo on StackBlitz:  
https://stackblitz.com/github/heritechie/map-boundary-editor

---

## Roadmap

- v0.3: reference boundary support, read-only mode, improved demo UX
- v0.4: additional map engine adapters (MapLibre, Google Maps)
- v1.0: stable API

The roadmap is intentionally conservative to keep the core API stable.

---

## Non-Goals

This project is intentionally not:

- A full GIS editor
- A GeoJSON validation library
- A replacement for tools like geojson.io
- A general-purpose map rendering framework

---
