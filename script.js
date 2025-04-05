var map = L.map('map').setView([29.9493364, -90.0473081], 15.4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);

let geoMap = {
  "350 Abalon": "29.9522626974298, -90.04305619024346",
  "412 Abalon": "29.951482318826535, -90.0430579479147",
  "217 Alix": "29.95078829611476, -90.05309073257217",
  "222 Alix": "29.95118467949591, -90.05324416140779",
  "337 Alix": "29.95161619857844, -90.05178924791473",
  "420 Alix": "29.95219370975532, -90.0513458614078",
  "317 Belleville": "29.95305976700341, -90.04820031907899",
  "347 Belleville": "29.952471960261587, -90.04812233072263",
  "618 Belleville": "29.949432606266736, -90.04789890373661",
  "432 Bermuda": "29.952144293578783, -90.05171884606521",
  "415 Bouny": "29.950985335315163, -90.05410868839401",
  "207 Delaronde": "29.952850308772796, -90.05362174606518",
  "243 Delaronde": "29.953340166321556, -90.0530007325721",
  "335 Delaronde": "29.95371204119853, -90.05208801722947",
  "315 Eliza": "29.949730044178814, -90.05238891907914",
  "427 Eliza": "29.950580220007645, -90.05116190373653",
  "615 Elmira": "29.94949979852474, -90.04725770373658",
  "826 Elmira": "29.947159681347213, -90.04696484791488",
  "101 Hubbell": "29.95464748030879, -90.04410008839378",
  "127 Lavergne": "29.95423051522798, -90.05248121722947",
  "235 Lavergne": "29.953410857803377, -90.05173133257207",
  "231 Morgan": "29.953977507086034, -90.05387053257206",
  "235 Morgan": "29.954016790076544, -90.05372217490081",
  "330 Morgan": "29.954842571286278, -90.05347249024328",
  "230 Olivier": "29.95382521575871, -90.04974373257205",
  "301 Olivier": "29.95333089135944, -90.05031264791467",
  "309 Olivier": "29.95316179583216, -90.05014483257203",
  "322 Oliver": "29.952875700471207, -90.04964431722954",
  "328 Olivier": "29.95271722545059, -90.04985923442153",
  "412 Olivier": "29.951924398030865, -90.04977463257211",
  "531 Olivier": "29.95035581250549, -90.0501477037365",
  "619 Olivier": "29.94953578701023, -90.0501884632573",
  "502 Opelousas": "29.949049914459344, -90.0503328307228",
  "637 Opelousas": "29.948668388875554, -90.04983226140789",
  "901 Opelousas": "29.94846073767649, -90.0469801037366",
  "915 Opelousas": "29.948536596602832, -90.04664200373665",
  "331 Pacific": "29.952689095155243, -90.04620352665066",
  "401 Pacific": "29.952065797779564, -90.04625786140778",
  "622 Pacific": "29.94919871044816, -90.04585887490097",
  "721 Patterson": "29.95512348800652, -90.04823394606514",
  "159 Pelican": "29.95110889551537, -90.05431481722962",
  "228 Pelican": "29.95211536119528, -90.05369885955827",
  "229 Pelican": "29.951727894357607, -90.0535158344216",
  "307 Pelican": "29.952037505935092, -90.05295100188702",
  "308 Pelican": "29.952212813797956, -90.05309857305137",
  "405 Pelican": "29.952616384487595, -90.05201729024337",
  "411 Pelican": "29.952692480220964, -90.05199417675036",
  "417 Pelican": "29.952826804680182, -90.05191873442156",
  "418 Pelican": "29.953078716736144, -90.05193177305138",
  "421 Pelican": "29.952968675491956, -90.05155739024345",
  "431 Pelican": "29.952912900408343, -90.05155739024345",
  "505 Pelican": "29.95313720834344, -90.05091906140777",
  "521 Pelican": "29.953256008165702, -90.0505660749008",
  "619 Pelican": "29.953152624961863, -90.04961884791462",
  "530 Powder": "29.949533013736517, -90.05370900373656",
  "532 Sequin": "29.950725711951907, -90.05185140188705",
  "115 Vallette": "29.954933388361994, -90.04908493257197",
  "232 Vallette": "29.954605171819043, -90.04865529024335",
  "323 Vallette": "29.952843925308354, -90.04918310373644",
  "520 Vallette": "29.950534312238304, -90.04901031907907",
  "107 Verret": "29.954852197143648, -90.05161941907893",
  "200 Verret": "29.954477789214224, -90.05112401907896",
  "217 Verret": "29.95405690696715, -90.05153279209281",
  "220 Verret": "29.954121998372962, -90.05092275955818",
  "320 Verret": "29.952828417064005, -90.05087919024338",
  "523 Verret": "29.950413196816463, -90.05096890373652",
  "604 Verret": "29.949743294233286, -90.05038598654455"
}

let categories = {
  "Antiques": ["350 Abalon", "317 Belleville", "615 Elmira", "826 Elmira", "101 Hubbell", "231 Morgan", "309 Olivier", "322 Oliver", "412 Olivier", "619 Olivier", "502 Opelousas", "915 Opelousas", "228 Pelican", "229 Pelican", "421 Pelican", "431 Pelican", "505 Pelican", "721 Patterson", "159 Pelican", "217 Verret", "523 Verret"],
  "Architectural Salvage": ["350 Abalon", "222 Alix", "127 Lavergne", "235 Lavergne", "330 Morgan", "721 Patterson", "421 Pelican", "107 Verret", "217 Verret", "523 Verret", "604 Verret"],
  "Baby/Kid": ["350 Abalon", "412 Abalon", "217 Alix", "222 Alix", "420 Alix", "347 Belleville", "618 Belleville", "432 Bermuda", "315 Eliza", "615 Elmira", "826 Elmira", "502 Opelousas", "637 Opelousas", "622 Pacific", "159 Pelican", "229 Pelican", "308 Pelican", "417 Pelican", "521 Pelican", "604 Verret"],
  "Books": ["350 Abalon", "412 Abalon", "217 Alix", "222 Alix", "337 Alix", "347 Belleville", "618 Belleville", "415 Bouny", "207 Delaronde", "615 Elmira", "826 Elmira", "502 Opelousas", "637 Opelousas", "901 Opelousas", "915 Opelousas", "401 Pacific", "622 Pacific", "159 Pelican", "307 Pelican", "411 Pelican", "520 Vallette", "107 Verret", "604 Verret"],
  "CDs/DVDs": ["350 Abalon", "347 Belleville", "618 Belleville", "615 Elmira", "826 Elmira", "207 Delaronde", "502 Opelousas", "637 Opelousas", "901 Opelousas", "622 Pacific", "159 Pelican", "107 Verret", "604 Verret"],
  "Clothes": ["350 Abalon", "412 Abalon", "217 Alix", "222 Alix", "347 Belleville", "618 Belleville", "432 Bermuda", "243 Delaronde", "335 Delaronde", "315 Eliza", "615 Elmira", "826 Elmira", "127 Lavergne", "619 Olivier", "502 Opelousas", "637 Opelousas", "901 Opelousas", "401 Pacific", "622 Pacific", "228 Pelican", "307 Pelican", "308 Pelican", "405 Pelican", "411 Pelican", "417 Pelican", "418 Pelican", "505 Pelican", "521 Pelican", "619 Pelican", "530 Powder #1", "530 Powder #2", "115 Vallette", "323 Vallette", "107 Verret", "220 Verret", "320 Verret", "604 Verret"],
  "Electronics": ["350 Abalon", "347 Belleville", "618 Belleville", "432 Bermuda", "315 Eliza", "826 Elmira", "222 Alix", "337 Alix", "521 Pelican", "308 Pelican", "604 Verret"],
  "Furniture": ["350 Abalon", "412 Abalon", "217 Alix", "347 Belleville", "618 Belleville", "415 Bouny", "207 Delaronde", "243 Delaronde", "315 Eliza", "615 Elmira", "826 Elmira", "101 Hubbell", "127 Lavergne", "235 Lavergne", "231 Morgan", "330 Morgan", "309 Olivier", "502 Opelousas", "637 Opelousas", "901 Opelousas", "622 Pacific", "228 Pelican", "411 Pelican", "417 Pelican", "418 Pelican", "421 Pelican", "431 Pelican", "521 Pelican", "619 Pelican", "721 Patterson", "520 Vallette", "107 Verret", "217 Verret", "220 Verret", "320 Verret", "604 Verret"],
  "Household": ["350 Abalon", "412 Abalon", "217 Alix", "337 Alix", "317 Belleville", "347 Belleville", "618 Belleville", "432 Bermuda", "415 Bouny", "207 Delaronde", "335 Delaronde", "243 Delaronde", "315 Eliza", "427 Eliza", "615 Elmira", "826 Elmira", "101 Hubbell", "127 Lavergne", "231 Morgan", "235 Morgan", "230 Olivier", "301 Olivier", "309 Olivier", "328 Olivier", "412 Olivier", "619 Olivier", "502 Opelousas", "637 Opelousas", "901 Opelousas", "622 Pacific", "228 Pelican", "307 Pelican", "308 Pelican", "405 Pelican", "411 Pelican", "417 Pelican", "418 Pelican", "421 Pelican", "619 Pelican", "115 Vallette", "323 Vallette", "520 Vallette", "200 Verret", "107 Verret", "217 Verret", "220 Verret", "320 Verret", "347 Verret", "523 Verret", "604 Verret"],
  "Office": ["217 Alix", "337 Alix", "618 Belleville", "432 Bermuda", "826 Elmira", "101 Hubbell", "127 Lavergne", "619 Olivier", "308 Pelican", "405 Pelican", "520 Vallette", "107 Verret", "200 Verret", "217 Verret", "320 Verret", "604 Verret"],
  "Tools": ["412 Abalon", "337 Alix", "618 Belleville", "235 Lavergne", "328 Olivier", "619 Olivier", "502 Opelousas", "637 Opelousas", "401 Pacific", "421 Pelican", "521 Pelican", "107 Verret", "217 Verret", "523 Verret", "604 Verret"],
  "Toys": ["412 Abalon"],
  "Appliances": ["337 Alix", "347 Belleville", "618 Belleville", "415 Bouny", "826 Elmira", "101 Hubbell", "235 Morgan", "412 Olivier", "502 Opelousas", "159 Pelican", "421 Pelican", "619 Olivier", "115 Vallette", "159 Pelican", "604 Verret"],
  "Raspberry Lemonade": ["217 Alix"],
  "Lefty Bass Guitar": ["217 Alix"],
  "Collectible Games & Books": ["217 Alix"],
  "HD TV": ["217 Alix"],
  "Tripods": ["432 Bermuda"],
  "Lighting Equipment": ["432 Bermuda"],
  "Boom Poles": ["432 Bermuda"],
  "Studio Lights": ["432 Bermuda"],
  "Music & Sound Gear": ["127 Lavergne"],
  "Guitars": ["127 Lavergne"],
  "Pedals": ["127 Lavergne"],
  "Cables": ["127 Lavergne"],
  "Original Mixed Media Artwork": ["127 Lavergne"],
  "DIY stuff for home": ["127 Lavergne"],
  "Men's Dress Clothing": ["127 Lavergne"],
  "Homemade Baked Goods": ["235 Lavergne"],
  "Patio table & Chairs": ["330 Morgan"],
  "3 Sets of Shutters with Hinges": ["330 Morgan"],
  "Vinyl Records": ["427 Eliza", "520 Vallette"],
  "Baby Clothes 0-2T": ["427 Eliza"],
  "Baby Gear": ["427 Eliza"],
  "Baby Toys": ["427 Eliza"],
  "Kitchen": ["243 Delaronde"],
  "Crafts": ["243 Delaronde"],
  "Home Decor": ["243 Delaronde"],
  "Eclectic Lemonade Boutique": ["235 Morgan"],
  "Clothing": ["328 Olivier"],
  "Original Stained Glass Art": ["232 Vallette"],
  "Pottery": ["323 Vallette"],
  "Vinyl Records": ["520 Vallette"],
  "Toys": ["520 Vallette"],
  "Clawfoot Tub": ["217 Verret"],
  "Antique Utility Sink": ["217 Verret"],
  "Antique Sofa": ["217 Verret"],
  "Vintage Items": ["217 Verret"],
  "One of a Kind Handmade Jewelry": ["229 Pelican"],
  "Antique Items Used to Create Pieces": ["229 Pelican"],
  "Vintage Clothes & Accessories": ["229 Pelican - Sales Tent"],
  "Sales Tent - $5, $10, $15, $20": ["229 Pelican - Sales Tent"],
  "Jewelry": ["532 Sequin", "505 Pelican"],
  "Handmade New Orleans Tumblers": ["532 Sequin"],
  "Bikes": ["159 Pelican"],
  "Mardi Gras": ["159 Pelican", "521 Pelican"],
  "Christmas": ["159 Pelican"],
  "Pet Supplies": ["159 Pelican"],
  "Food Items": ["637 Opelousas"],
  "Antique Train": ["521 Pelican"],
  "Mardi Gras Doubloons": ["521 Pelican"],
  "Art": ["521 Pelican", "505 Pelican"]
}

Object.keys(categories).forEach((key, index) => {
  categories[key] = categories[key].map(add => geoMap[add])
});

Object.keys(geoMap).forEach((address, i) => {
  let coordString = geoMap[address];
  let coord = coordString.split(',').map(s => Number(s));
  console.log(coord)
  L.marker(coord)
    .bindPopup(address)
    .addTo(map);
});

const dropdown = document.getElementById("dropdown");
Object.keys(categories).forEach((category) => {
  // Create a new <option> element
  var option = document.createElement("option");
  option.value = categories[category];
  option.textContent = category;
  
  // Append the option to the select element
  dropdown.appendChild(option);
});



