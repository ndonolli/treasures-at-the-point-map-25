import { escapeHtml, normalizeCoordString } from "../utils.js";

function buildPopupContent(address, listing) {
  const categoriesHtml = listing.categories.map(escapeHtml).join(", ");
  const notesHtml = listing.notes.length
    ? `<div style="margin-top:8px;"><strong>Notes:</strong> ${listing.notes.map(escapeHtml).join("; ")}</div>`
    : "";

  return `
    <div>
      <div><strong>${escapeHtml(address)}</strong></div>
      <div style="margin-top:6px;"><strong>Categories:</strong> ${categoriesHtml}</div>
      ${notesHtml}
    </div>
  `;
}

function getVisibleCoords(addresses, geoMap) {
  return addresses
    .map((address) => ({ address, coord: normalizeCoordString(geoMap[address]) }))
    .filter((entry) => entry.coord);
}

export function createMapController({ mapElementId, listings, geoMap, defaultCenter, defaultZoom }) {
  const map = L.map(mapElementId).setView(defaultCenter, defaultZoom);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  const markerLayer = L.layerGroup().addTo(map);

  return {
    render(addresses) {
      markerLayer.clearLayers();

      const visible = getVisibleCoords(addresses, geoMap);

      visible.forEach(({ address, coord }) => {
        L.marker(coord)
          .bindPopup(buildPopupContent(address, listings[address]))
          .addTo(markerLayer);
      });

      if (visible.length === 1) {
        map.setView(visible[0].coord, 17);
      } else if (visible.length > 1) {
        map.fitBounds(L.latLngBounds(visible.map((entry) => entry.coord)), {
          padding: [30, 30],
        });
      } else {
        map.setView(defaultCenter, defaultZoom);
      }
    },
  };
}