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

## Features

- Draw, edit, and delete polygon boundaries
- Supports **multiple boundaries** (GeoJSON `FeatureCollection`)
- Leaflet-based (no API key required)
- Outputs standard GeoJSON (RFC 7946)
- Framework-agnostic Web Component
- **Lifecycle-safe public API** (no timing hacks required)

---

## Installation

### Via npm

```bash
npm install map-boundary-editor
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

> All public APIs (`setView`, `setGeoJSON`, `clear`) are safe to call immediately after the element is created. No `setTimeout` or `customElements.whenDefined` is required.

---

### Setting Initial View

```js
editor.setView(lat, lng, zoom);
```

If a boundary is later loaded using setGeoJSON, the map will automatically fit to the boundary.

---

### Loading an Existing Boundary

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

### Optional: Use User Geolocation

`map-boundary-editor` supports an optional geolocation-based initial view to help users quickly focus on their current area.

This feature is **opt-in** and **disabled by default**.

---

### Enable Geolocation (Opt-in)

```html
<map-boundary-editor use-geolocation></map-boundary-editor>
```

When enabled:

- The editor will attempt to center the map on the user’s current location
- The browser will request permission explicitly
- If permission is denied or unavailable, the map silently falls back to the default view

---

### Behavior & Priority Rules

The initial map view follows this priority order:

1. `setGeoJSON()`

   If boundaries are loaded, the map will automatically fit to them.

2. `use-geolocation` **attribute**

   If enabled and permission is granted, the map centers on the user’s location.

3. **Default view**

   Falls back to a neutral world view (`[0, 0]`, zoom `2`).

---

### Interaction with setView()

If `setView()` is called by the host application, it will override the geolocation-based view.

```js
editor.setView(-6.2, 106.8, 11);
```

This allows full programmatic control when needed.

---

### Geolocation Toggle Behavior

The `use-geolocation` attribute is reactive and can be toggled at runtime.

```js
editor.setAttribute("use-geolocation", "");
editor.removeAttribute("use-geolocation");
```

- Adding the attribute triggers a geolocation request
- Removing the attribute does not reset the map view automatically
- Only one geolocation request can be active at a time
- Browser permission handling is respected (no repeated prompts)

Geolocation is treated as a UX helper, not persistent state.

---

### Privacy Notes

- Geolocation is never requested automatically
- Location data is not stored
- Location data is not transmitted
- The feature only affects the initial map view

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

- v0.3: read-only mode
- v0.4: additional map engine adapters (MapLibre, Google Maps)
- v1.0: stable API

---
