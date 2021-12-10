//show Singapore upon loading
let singapore = [1.3521, 103.8198];
let map = L.map("map").setView(singapore, 12);

// setup the tile layers
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", //demo access token
  }
).addTo(map);

//creating icons

let boardingIcon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/64/000000/dog-house--v1.png",
  iconSize: [32, 37],
});

let groomerIcon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/64/000000/barbershop.png",
  iconSize: [25, 25],
});

let runIcon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/64/000000/dog-jump--v2.png",
  iconSize: [32, 37],
});

let poolIcon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/64/000000/dog-swim--v2.png",
  iconSize: [32, 37],
});

let foodIcon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/64/000000/asian-street-food.png",
  iconSize: [32, 37],
});

let hotelIcon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/64/000000/hotel-building--v2.png",
  iconSize: [25, 28],
});

//Adding POI

let boardingLayer = L.layerGroup();
let groomerLayer = L.layerGroup();
let dogrunLayer = L.layerGroup();
let petpoolLayer = L.layerGroup();
let foodLayer = L.layerGroup();
let hotelLayer = L.layerGroup();

window.addEventListener("DOMContentLoaded", async function () {
  let boardingMarkerCluster = await loadGeojsonToCluster(
    "data/pet-boarding.geojson",
    boardingIcon
  );
  let groomerMarkerCluster = await loadGeojsonToCluster(
    "data/groomers.geojson",
    groomerIcon
  );
  let dogrunMarkerCluster = await loadGeojsonToCluster(
    "data/dog-run.geojson",
    runIcon
  );
  let foodMarkerCluster = await loadGeojsonToCluster(
    "data/food.geojson",
    foodIcon
  );
  let hotelMarkerCluster = await loadGeojsonToCluster(
    "data/hotel.geojson",
    hotelIcon
  );
  let petpoolMarkerCluster = await loadGeojsonToCluster(
    "data/pet-pool.geojson",
    poolIcon
  );

  //Add to Layer
  boardingMarkerCluster.addTo(boardingLayer);
  groomerMarkerCluster.addTo(groomerLayer);
  dogrunMarkerCluster.addTo(dogrunLayer);
  petpoolMarkerCluster.addTo(petpoolLayer);
  foodMarkerCluster.addTo(foodLayer);
  hotelMarkerCluster.addTo(hotelLayer);

  //Default shown
  map.addLayer(boardingLayer);
  map.addLayer(groomerLayer);
  map.addLayer(dogrunLayer);
  map.addLayer(petpoolLayer);
  map.addLayer(foodLayer);
  map.addLayer(hotelLayer);
});

async function loadGeojsonToCluster(fileName, icon) {
  let response = await axios.get(fileName);
  let objects = response.data.features;
  let markerCluster = L.markerClusterGroup();

  for (let i = 0; i < objects.length; i++) {
    addToMarkerCluster(objects[i], icon, markerCluster);
  }

  return markerCluster;
}

async function loadGeojsonAndSearchToCluster(fileName, icon, searchString) {
  let response = await axios.get(fileName);
  let objects = response.data.features;
  let markerCluster = L.markerClusterGroup();

  for (let i = 0; i < objects.length; i++) {
    // Search for business name that has searchString in it, ignoring upper/lower case
    if (searchString) {
      const searchStringLowerCase = searchString.toLowerCase();
      const businessNameLowerCase =
        pos.properties.Location["Business Name"].toLowerCase();
      if (businessNameLowerCase.includes(searchStringLowerCase)) {
        addToMarkerCluster(objects[i], icon, markerCluster);
      }
    } else {
      addToMarkerCluster(objects[i], icon, markerCluster);
    }
  }

  return markerCluster;
}

function addToMarkerCluster(object, icon, markerCluster) {
  let pos = object;
  let coordinates = pos.geometry.coordinates;

  L.marker([coordinates[1], coordinates[0]], { icon: icon })
    .bindPopup(
      `
        <b> ${pos.properties.Location["Business Name"]} </b>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
    )
    .on("click", function (e) {
      map.setView(e.latlng, 16);
    })
    .addTo(markerCluster);
}
