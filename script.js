import { ALL_FILTER_VALUE, DEFAULT_CENTER, DEFAULT_ZOOM } from "./js/config.js";
import { geoMap, listings, unresolvedAddresses } from "./js/data/listings-data.js";
import { createFilterController } from "./js/modules/filters.js";
import { setupInstallPrompt } from "./js/modules/install.js";
import { createMapController } from "./js/modules/map.js";
import { registerServiceWorker } from "./js/modules/service-worker.js";
import { buildCategoryIndex, sortAddresses } from "./js/utils.js";

const dropdown = document.getElementById("dropdown");
const categoryIndex = buildCategoryIndex(listings);
const allAddresses = sortAddresses(Object.keys(listings));

const mapController = createMapController({
  mapElementId: "map",
  listings,
  geoMap,
  defaultCenter: DEFAULT_CENTER,
  defaultZoom: DEFAULT_ZOOM,
});

const filterController = createFilterController({
  dropdown,
  allFilterValue: ALL_FILTER_VALUE,
  allAddresses,
  categoryIndex,
  onChange: (selectedAddresses) => {
    mapController.render(selectedAddresses);
  },
});

mapController.render(filterController.getSelectedAddresses());
setupInstallPrompt();

if (unresolvedAddresses.length) {
  console.warn("Listings without stored coordinates:", unresolvedAddresses);
}

window.addEventListener("load", () => {
  void registerServiceWorker();
});
