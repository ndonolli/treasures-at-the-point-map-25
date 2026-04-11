const DEFAULT_CENTER = [29.9493364, -90.0473081];
const DEFAULT_ZOOM = 15.4;
const ALL_FILTER_VALUE = "__all__";

const map = L.map("map").setView(DEFAULT_CENTER, DEFAULT_ZOOM);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);

const listings = {
  "516 Abalon": {
    categories: ["Baby/Kid", "Books", "CDs/DVDs", "Clothing", "Electronics"],
    notes: [],
  },
  "420 Alix": {
    categories: ["Baby/Kid", "Books"],
    notes: [],
  },
  "809 Alix": {
    categories: ["CDs/DVDs", "Furniture", "Household"],
    notes: [],
  },
  "435 Atlantic": {
    categories: ["Antiques", "Architectural Salvage", "Books", "Electronics", "Furniture", "Household", "Office", "Tools"],
    notes: [],
  },
  "239 Belleville": {
    categories: ["Books", "Tools"],
    notes: [],
  },
  "245 Belleville": {
    categories: ["Appliances", "Baby/Kid", "Clothing", "Household", "Office", "Tools"],
    notes: [],
  },
  "249 Belleville": {
    categories: ["Household", "Art"],
    notes: ["Original paintings & prints"],
  },
  "256 Belleville": {
    categories: ["Clothing", "Household"],
    notes: [],
  },
  "526 Belleville": {
    categories: ["Antiques", "Furniture", "Household", "Office"],
    notes: [],
  },
  "532 Belleville": {
    categories: ["Baby/Kid", "Books", "Furniture"],
    notes: [],
  },
  "538 Belleville": {
    categories: ["Architectural Salvage", "Electronics", "Furniture", "Household", "Office", "Tools", "Art"],
    notes: ["Lighted/funny signs", "Knickknacks", "Workbenches", "Masks", "Snakes"],
  },
  "611 Belleville": {
    categories: ["Books", "CDs/DVDs", "Clothing", "Furniture", "Household", "Office"],
    notes: [],
  },
  "240 Bermuda": {
    categories: ["Antiques", "Clothing", "Furniture", "Household", "Office"],
    notes: [],
  },
  "315 Bermuda": {
    categories: ["Antiques", "Books", "Clothing", "Household", "Collectibles"],
    notes: ["Bicycle", "Magic books & tarot cards", "Free & $1 stuff"],
  },
  "517 Bermuda": {
    categories: ["Clothing", "Furniture", "Household"],
    notes: [],
  },
  "541 Bermuda": {
    categories: ["Food/Drink"],
    notes: ["Faubourg Fresh Market"],
  },
  "640 Bouny": {
    categories: ["Food/Drink"],
    notes: ["The Little House Cafe"],
  },
  "141 Delaronde": {
    categories: ["Food/Drink"],
    notes: ["Nighthawk Napoletana"],
  },
  "207 Delaronde": {
    categories: ["Appliances", "Books", "CDs/DVDs", "Clothing", "Household"],
    notes: [],
  },
  "243 Delaronde": {
    categories: ["Books", "Clothing", "Household"],
    notes: [],
  },
  "301 Delaronde": {
    categories: ["CDs/DVDs", "Electronics", "Household", "Office"],
    notes: [],
  },
  "404 Delaronde": {
    categories: ["Antiques", "Books", "Clothing", "Furniture", "Household"],
    notes: [],
  },
  "427 Eliza": {
    categories: ["Household", "Art", "Books"],
    notes: ["Books by color / by the foot"],
  },
  "429/431 Eliza": {
    categories: ["Antiques", "Furniture", "Art", "Decor"],
    notes: ["Antique textiles", "Rugs", "Original art"],
  },
  "277 Elmira": {
    categories: ["Antiques", "Appliances", "Architectural Salvage", "CDs/DVDs", "Clothing", "Household", "Office"],
    notes: ["Antique bottles & relics unearthed by Shane Mears", "Open until 5"],
  },
  "279 Elmira": {
    categories: ["Appliances", "Household", "Clothing"],
    notes: ["Kitchen appliances", "Authentic vintage denim & dungaree clothing made in the USA"],
  },
  "335 Elmira": {
    categories: ["Antiques", "Appliances", "CDs/DVDs", "Clothing", "Electronics", "Furniture", "Household", "Office", "Tools"],
    notes: [],
  },
  "431/433 Elmira": {
    categories: ["Baby/Kid", "Books", "CDs/DVDs", "Clothing", "Household", "Crafts", "Garden"],
    notes: ["Fill-a-bag clothing", "Crafting supplies", "Tea pots & cups", "Wedding dress", "Formal dresses"],
  },
  "521 Elmira": {
    categories: ["Baby/Kid", "Books", "Clothing", "Household"],
    notes: [],
  },
  "600 Elmira": {
    categories: ["Antiques", "CDs/DVDs", "Clothing", "Furniture"],
    notes: [],
  },
  "615 Elmira": {
    categories: ["Antiques", "Baby/Kid", "Clothing", "Furniture", "Household", "Office"],
    notes: [],
  },
  "101 Hubbell": {
    categories: ["Antiques", "Books", "CDs/DVDs", "Electronics", "Household", "Office", "Music"],
    notes: ["Static Age Trading", "Blu-rays/VHS", "Cassette tapes", "Vinyl"],
  },
  "127 Lavergne": {
    categories: ["Architectural Salvage", "Clothing", "Electronics", "Furniture", "Household", "Office", "Tools", "Art"],
    notes: ["Original mixed media artwork"],
  },
  "231 Morgan": {
    categories: ["Antiques", "Household"],
    notes: [],
  },
  "219 Olivier": {
    categories: ["Books", "CDs/DVDs"],
    notes: [],
  },
  "230 Olivier": {
    categories: ["Household", "Jewelry", "Decor"],
    notes: ["Costume jewelry", "Bracelets", "Necklaces", "Earrings", "Glass dishes", "Ashtrays"],
  },
  "311 Olivier": {
    categories: ["Antiques", "Baby/Kid", "Clothing", "Furniture", "Household"],
    notes: [],
  },
  "328 Olivier": {
    categories: ["Antiques", "Baby/Kid", "Books", "Furniture", "Household"],
    notes: [],
  },
  "410 Olivier": {
    categories: ["Antiques", "Baby/Kid", "Books", "Clothing", "Electronics", "Household", "Tools"],
    notes: [],
  },
  "605 Olivier": {
    categories: ["Appliances", "Books", "Household", "Office"],
    notes: [],
  },
  "616 Olivier": {
    categories: ["Books", "Household", "Office", "Tools"],
    notes: [],
  },
  "619 Olivier": {
    categories: ["Antiques", "Architectural Salvage", "CDs/DVDs", "Clothing", "Furniture", "Household", "Tools"],
    notes: [],
  },
  "200 Opelousas": {
    categories: ["Events"],
    notes: ["Compass Point Events", "Sale on Sunday"],
  },
  "411 Opelousas": {
    categories: ["Baby/Kid", "Books", "Clothing", "Household"],
    notes: [],
  },
  "502 Opelousas": {
    categories: ["Antiques", "Baby/Kid", "Books", "Clothing", "Household"],
    notes: [],
  },
  "637 Opelousas": {
    categories: ["Appliances", "Books", "CDs/DVDs", "Electronics", "Household"],
    notes: ["Algiers United Methodist Church sale"],
  },
  "833 Opelousas": {
    categories: ["Services"],
    notes: ["Headcase Salon"],
  },
  "401 Pacific": {
    categories: ["Baby/Kid", "Books", "Clothing", "Furniture", "Household", "Office"],
    notes: ["Kid stuff"],
  },
  "406 Pacific": {
    categories: ["Books", "Clothing", "Household", "Art"],
    notes: [],
  },
  "427 Pacific": {
    categories: ["Antiques", "Books", "Furniture", "Household", "Office"],
    notes: [],
  },
  "436 Pacific": {
    categories: ["Baby/Kid", "Books", "Clothing", "Furniture", "Household"],
    notes: [],
  },
  "439 Pacific": {
    categories: ["Music", "Electronics", "Sports/Outdoors", "Collectibles"],
    notes: ["Guitars", "Cameras", "Sporting goods", "Barware/bar accessories", "Board games", "LPs", "Luggage"],
  },
  "528 Pacific": {
    categories: ["Antiques", "Appliances", "Books", "CDs/DVDs", "Clothing", "Electronics", "Furniture", "Household", "Office"],
    notes: [],
  },
  "532 Pacific": {
    categories: ["Antiques", "Books", "Clothing", "Furniture", "Household", "Art", "Decor"],
    notes: [],
  },
  "533 Pacific": {
    categories: ["Books", "Clothing", "Furniture", "Household", "Office", "Music", "Handmade", "Collectibles"],
    notes: ["Tarot/witchy", "Musical instruments & equipment", "Vintage"],
  },
  "630 Pacific": {
    categories: ["Household"],
    notes: ["Sunday only"],
  },
  "503 Patterson": {
    categories: ["Clothing", "Electronics", "Furniture", "Household"],
    notes: ["Moving sale", "Everything must go", "Parking lot"],
  },
  "545 Patterson": {
    categories: ["Services", "Food/Drink"],
    notes: ["Old Point Bar", "Bathrooms"],
  },
  "721 Patterson": {
    categories: ["Antiques"],
    notes: [],
  },
  "923 Patterson": {
    categories: ["Books", "CDs/DVDs", "Clothing", "Furniture", "Household"],
    notes: [],
  },
  "1403 Patterson": {
    categories: ["Food/Drink"],
    notes: ["River Fine Foods", "Open 7am Sat, 8am Sun"],
  },
  "155 Pelican": {
    categories: ["Appliances", "Baby/Kid", "Books", "Clothing", "Furniture", "Household"],
    notes: [],
  },
  "200 Pelican": {
    categories: ["Food/Drink"],
    notes: ["Crown & Anchor Pub", "Open 11am Sat & Sun"],
  },
  "228 Pelican": {
    categories: ["Books", "Clothing", "Furniture", "Household"],
    notes: [],
  },
  "229 Pelican": {
    categories: ["Architectural Salvage", "Books", "Clothing", "Furniture", "Household"],
    notes: [],
  },
  "240 Pelican": {
    categories: ["Food/Drink"],
    notes: ["Congregation Coffee"],
  },
  "307 Pelican": {
    categories: ["Clothing", "Household"],
    notes: [],
  },
  "308 Pelican": {
    categories: ["Baby/Kid", "Clothing", "Household"],
    notes: [],
  },
  "335 Pelican": {
    categories: ["Food/Drink"],
    notes: ["House of the Rising Sun"],
  },
  "417 Pelican": {
    categories: ["Baby/Kid", "Clothing", "Furniture", "Household"],
    notes: [],
  },
  "429 Pelican": {
    categories: ["Antiques", "Books", "Electronics", "Furniture", "Household"],
    notes: [],
  },
  "446 Pelican": {
    categories: ["Food/Drink"],
    notes: ["Barracuda Tacos"],
  },
  "505 Pelican": {
    categories: ["Antiques", "Books", "CDs/DVDs", "Clothing", "Furniture", "Household", "Art"],
    notes: ["Fine Funky Art"],
  },
  "521 Pelican": {
    categories: ["Household"],
    notes: [],
  },
  "525 Pelican": {
    categories: ["Art", "Handmade", "Clothing"],
    notes: ["Handmade children & adult clothes", "Watercolors"],
  },
  "530 Pelican": {
    categories: ["Food/Drink", "Household"],
    notes: ["Mount Olivet Church Sale", "Everything", "Chili dogs", "Walking tacos", "Snacks", "Open Saturday only"],
  },
  "712 Pelican": {
    categories: ["Services", "Food/Drink"],
    notes: ["Casa Pelican B&B and Cooking School"],
  },
  "813 Pelican": {
    categories: ["Household", "Clothing", "Furniture"],
    notes: ["Suites at Algiers Point sale", "Costumes", "Wigs"],
  },
  "530 Powder": {
    categories: ["Books", "CDs/DVDs", "Clothing", "Electronics", "Household", "Office", "Appliances", "Furniture", "Antiques", "Tools"],
    notes: ["Bargeboard Treasure Court"],
  },
  "825 Red Allen": {
    categories: ["Books", "Clothing", "Household", "Office"],
    notes: [],
  },
  "224 Sequin": {
    categories: ["Books", "Clothing", "Electronics", "Household"],
    notes: ["All proceeds go toward art supplies for Little Free Art Gallery"],
  },
  "501 Sequin": {
    categories: ["Books"],
    notes: ["Nomad Used Books"],
  },
  "614 Sequin": {
    categories: ["Clothing", "Food/Drink"],
    notes: ["Local oysters shucked to order"],
  },
  "636 Sequin": {
    categories: ["Baby/Kid", "Books", "CDs/DVDs", "Clothing", "Electronics", "Household"],
    notes: [],
  },
  "1000 Teche": {
    categories: ["Antiques", "Appliances", "Architectural Salvage", "Electronics", "Furniture", "Household", "Office", "Tools"],
    notes: [],
  },
  "232 Vallette": {
    categories: ["Art"],
    notes: ["Original stained glass art"],
  },
  "258 Vallette": {
    categories: ["Books", "CDs/DVDs", "Household", "Tools", "Garden", "Collectibles"],
    notes: ["LP albums", "Wine glasses", "Free stuff"],
  },
  "323 Vallette": {
    categories: ["Books", "Clothing", "Household", "Art"],
    notes: ["Pottery"],
  },
  "338 Vallette": {
    categories: ["Household", "Art", "Handmade"],
    notes: ['Handmade "Alligator Ouroboros" mirrors'],
  },
  "200 Verret": {
    categories: ["Books", "Clothing", "Household"],
    notes: [],
  },
  "323 Verret": {
    categories: ["Food/Drink"],
    notes: ["The Drift Inn Diner"],
  },
  "347 Verret": {
    categories: ["Food/Drink"],
    notes: ["Tout de Suite Cafe"],
  },
  "523 Verret": {
    categories: ["Antiques", "Architectural Salvage", "Household"],
    notes: ["Sponsor: Sybil Orr, Keller Williams Realty"],
  },
  "534 Verret": {
    categories: ["Appliances", "Furniture", "Household"],
    notes: [],
  },
  "548 Verret": {
    categories: ["Appliances", "Furniture", "Household", "Tools"],
    notes: [],
  },
  "604 Verret": {
    categories: ["Antiques", "Architectural Salvage", "Baby/Kid", "Books", "Clothing", "Electronics", "Furniture", "Household", "Office", "Tools"],
    notes: [],
  },
};

const geoMap = {
  "420 Alix": "29.95219370975532,-90.0513458614078",
  "207 Delaronde": "29.952850308772796,-90.05362174606518",
  "243 Delaronde": "29.953340166321556,-90.0530007325721",
  "427 Eliza": "29.950580220007645,-90.05116190373653",
  "615 Elmira": "29.94949979852474,-90.04725770373658",
  "101 Hubbell": "29.95464748030879,-90.04410008839378",
  "127 Lavergne": "29.95423051522798,-90.05248121722947",
  "231 Morgan": "29.953977507086034,-90.05387053257206",
  "230 Olivier": "29.95382521575871,-90.04974373257205",
  "328 Olivier": "29.95271722545059,-90.04985923442153",
  "619 Olivier": "29.94953578701023,-90.0501884632573",
  "502 Opelousas": "29.949049914459344,-90.0503328307228",
  "637 Opelousas": "29.948668388875554,-90.04983226140789",
  "401 Pacific": "29.952065797779564,-90.04625786140778",
  "721 Patterson": "29.95512348800652,-90.04823394606514",
  "228 Pelican": "29.95211536119528,-90.05369885955827",
  "229 Pelican": "29.951727894357607,-90.0535158344216",
  "307 Pelican": "29.952037505935092,-90.05295100188702",
  "308 Pelican": "29.952212813797956,-90.05309857305137",
  "417 Pelican": "29.952826804680182,-90.05191873442156",
  "505 Pelican": "29.95313720834344,-90.05091906140777",
  "521 Pelican": "29.953256008165702,-90.0505660749008",
  "530 Powder": "29.949533013736517,-90.05370900373656",
  "232 Vallette": "29.954605171819043,-90.04865529024335",
  "323 Vallette": "29.952843925308354,-90.04918310373644",
  "200 Verret": "29.954477789214224,-90.05112401907896",
  "523 Verret": "29.950413196816463,-90.05096890373652",
  "604 Verret": "29.949743294233286,-90.05038598654455",
  "141 Delaronde": "29.9521729,-90.0545659",
  "155 Pelican": "29.9510112,-90.0544958",
  "200 Opelousas": "29.9481501,-90.0385911",
  "200 Pelican": "29.9514937,-90.0542552",
  "219 Olivier": "29.9539505,-90.0501755",
  "239 Belleville": "29.9542049,-90.0479932",
  "240 Bermuda": "29.9534612,-90.0529717",
  "240 Pelican": "29.9518733,-90.0534555",
  "245 Belleville": "29.9541167,-90.0481064",
  "249 Belleville": "29.9539958,-90.0480080",
  "256 Belleville": "29.9536853,-90.0477689",
  "258 Vallette": "29.9537878,-90.0486347",
  "277 Elmira": "29.9533007,-90.0469235",
  "279 Elmira": "29.9532756,-90.0469243",
  "301 Delaronde": "29.9533380,-90.0528290",
  "311 Olivier": "29.9529875,-90.0502390",
  "315 Bermuda": "29.9529231,-90.0529317",
  "323 Verret": "29.9526602,-90.0511972",
  "335 Elmira": "29.9523963,-90.0470898",
  "335 Pelican": "29.9522866,-90.0524263",
  "338 Vallette": "29.9523791,-90.0487296",
  "347 Verret": "29.9520945,-90.0511146",
  "404 Delaronde": "29.9541389,-90.0519725",
  "406 Pacific": "29.9517411,-90.0457978",
  "410 Olivier": "29.9518074,-90.0498486",
  "411 Opelousas": "29.9484585,-90.0518581",
  "427 Pacific": "29.9513569,-90.0462099",
  "429 Pelican": "29.9527675,-90.0516257",
  "429/431 Eliza": "29.9504689,-90.0510563",
  "431/433 Elmira": "29.9513021,-90.0471601",
  "435 Atlantic": "29.9514701,-90.0450960",
  "436 Pacific": "29.9511236,-90.0458282",
  "439 Pacific": "29.9510927,-90.0462392",
  "446 Pelican": "29.9532833,-90.0513733",
  "503 Patterson": "29.9549184,-90.0512086",
  "516 Abalon": "29.9517750,-90.0446132",
  "517 Bermuda": "29.9512622,-90.0514583",
  "521 Elmira": "29.9503548,-90.0471203",
  "525 Pelican": "29.9530789,-90.0504897",
  "526 Belleville": "29.9505049,-90.0479646",
  "528 Pacific": "29.9503890,-90.0459314",
  "530 Pelican": "29.9533220,-90.0507662",
  "532 Belleville": "29.9504486,-90.0479680",
  "532 Pacific": "29.9503507,-90.0459339",
  "533 Pacific": "29.9500183,-90.0461999",
  "534 Verret": "29.9501103,-90.0505014",
  "538 Belleville": "29.9503923,-90.0479713",
  "541 Bermuda": "29.9507840,-90.0512547",
  "545 Patterson": "29.9549375,-90.0501914",
  "548 Verret": "29.9498211,-90.0505996",
  "600 Elmira": "29.9495421,-90.0467863",
  "605 Olivier": "29.9495468,-90.0501034",
  "611 Belleville": "29.9494397,-90.0483514",
  "616 Olivier": "29.9493318,-90.0497182",
  "630 Pacific": "29.9488446,-90.0460085",
  "640 Bouny": "29.9493628,-90.0525235",
  "712 Pelican": "29.9534642,-90.0485465",
  "809 Alix": "29.9519198,-90.0476814",
  "813 Pelican": "29.9530278,-90.0474133",
  "825 Red Allen": "29.9474787,-90.0475715",
  "833 Opelousas": "29.9484592,-90.0473421",
  "923 Patterson": "29.9548004,-90.0460462",
  "1000 Teche": "29.9452855,-90.0520297",
  "1403 Patterson": "29.9540983,-90.0414198",
};

const unresolvedAddresses = ["224 Sequin", "501 Sequin", "614 Sequin", "636 Sequin"];

const dropdown = document.getElementById("dropdown");

function normalizeCoordString(coordString) {
  if (!coordString || typeof coordString !== "string") {
    return null;
  }

  const parts = coordString.split(",").map((value) => Number(value.trim()));

  if (parts.length !== 2 || parts.some((value) => Number.isNaN(value))) {
    return null;
  }

  return parts;
}

function buildCategoryIndex(data) {
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
    categoryIndex[category].sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
  });

  return categoryIndex;
}

const categoryIndex = buildCategoryIndex(listings);
const allAddresses = Object.keys(listings).sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
let selectedAddresses = [...allAddresses];
let geocodeInFlight = false;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

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

function getMissingAddresses(addresses) {
  return addresses.filter((address) => !normalizeCoordString(geoMap[address]));
}

function getVisibleCoords(addresses) {
  return addresses
    .map((address) => ({ address, coord: normalizeCoordString(geoMap[address]) }))
    .filter((entry) => entry.coord);
}

function renderMap(addresses) {
  markerLayer.clearLayers();

  const visible = getVisibleCoords(addresses);

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
    map.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  }
}

function addDropdownOption(value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  dropdown.appendChild(option);
}

function populateDropdown() {
  dropdown.innerHTML = "";
  addDropdownOption(ALL_FILTER_VALUE, `Show All (${allAddresses.length})`);

  Object.keys(categoryIndex)
    .sort((left, right) => left.localeCompare(right))
    .forEach((category) => {
      addDropdownOption(category, `${category} (${categoryIndex[category].length})`);
    });
}

function onDropdownChange() {
  const selectedValue = dropdown.value;
  selectedAddresses = selectedValue === ALL_FILTER_VALUE
    ? [...allAddresses]
    : [...(categoryIndex[selectedValue] || allAddresses)];
  renderMap(selectedAddresses);
}

dropdown.addEventListener("change", onDropdownChange);

populateDropdown();
renderMap(selectedAddresses);

if (unresolvedAddresses.length) {
  console.warn("Listings without stored coordinates:", unresolvedAddresses);
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  if (window.location.protocol === "file:") {
    return;
  }

  try {
    await navigator.serviceWorker.register("./sw.js");
  } catch (error) {
    console.warn("Service worker registration failed", error);
  }
}

window.addEventListener("load", () => {
  registerServiceWorker();
});

