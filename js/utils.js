export function normalizeCoordString(coordString) {
  if (!coordString || typeof coordString !== "string") {
    return null;
  }

  const parts = coordString.split(",").map((value) => Number(value.trim()));

  if (parts.length !== 2 || parts.some((value) => Number.isNaN(value))) {
    return null;
  }

  return parts;
}

export function sortAddresses(addresses) {
  return [...addresses].sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
}

export function buildCategoryIndex(data) {
  const categoryIndex = {};

  Object.entries(data).forEach(([address, listing]) => {
    listing.categories.forEach((category) => {
      if (!categoryIndex[category]) {
        categoryIndex[category] = [];
      }

      categoryIndex[category].push(address);
    });
  });

  Object.keys(categoryIndex).forEach((category) => {
    categoryIndex[category] = sortAddresses(categoryIndex[category]);
  });

  return categoryIndex;
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}