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

// window.addEventListener("DOMContentLoaded", async function () {
//   // Pet boarding locator marker cluster group

//   let boardingResponse = await axios.get("data/pet-boarding.geojson");
//   let boardingObjects = boardingResponse.data.features;
//   // console.log(boardingObjects);
//   let boardingMarkerCluster = L.markerClusterGroup();
//   for (let i = 0; i < boardingObjects.length; i++) {
//     let pos = boardingObjects[i];
//     let boardingCoordinates = pos.geometry.coordinates;
//     // console.log(boardingCoordinates, pos.properties.Location["Business Name"]);
//     L.marker([boardingCoordinates[1], boardingCoordinates[0]])
//       .bindPopup(
//         `
//     <p> ${pos.properties.Location["Business Name"]} </p>
//     <p> Address: ${pos.properties.Location.Address}</p>
//     `
//       )
//       .addTo(boardingMarkerCluster);
//   }
//   // boardingMarkerCluster.addTo(map);

//   let boardingLayer = L.layerGroup(boardingMarkerCluster);

//   let baseMaps = {};

//   let overlayMaps = {
//     "Pet Boarding": boardingLayer,
//   };

//   L.control.layers(baseMaps, overlayMaps).addTo(map);
// });

//creating icons

let groomerIcon = L.icon({
  iconUrl: "image/paw-icon.png",
  iconSize: [20, 20],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  // shadowUrl: "my-icon-shadow.png",
  // shadowSize: [68, 95],
  // shadowAnchor: [22, 94],
});

//add marker layers to map

let boardingLayer = L.layerGroup();
let groomerLayer = L.layerGroup();
let dogrunLayer = L.layerGroup();
let petpoolLayer = L.layerGroup();
let foodLayer = L.layerGroup();
let hotelLayer = L.layerGroup();

async function getBoardingLayer() {
  let boardingResponse = await axios.get("data/pet-boarding.geojson");
  let boardingObjects = boardingResponse.data.features;
  for (let i = 0; i < boardingObjects.length; i++) {
    let pos = boardingObjects[i];
    let boardingCoordinates = pos.geometry.coordinates;
    // console.log(boardingCoordinates, pos.properties.Location["Business Name"]);
    L.marker([boardingCoordinates[1], boardingCoordinates[0]])
      .bindPopup(
        `
        <p> ${pos.properties.Location["Business Name"]} </p>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .addTo(boardingLayer);
  }
  return;
}
async function getGroomerLayer() {
  let groomerResponse = await axios.get("data/groomers.geojson");
  let groomerObjects = groomerResponse.data.features;
  for (let i = 0; i < groomerObjects.length; i++) {
    let pos = groomerObjects[i];
    let groomerCoordinates = pos.geometry.coordinates;
    // console.log(groomerCoordinates, pos.properties.Location["Business Name"]);
    L.marker([groomerCoordinates[1], groomerCoordinates[0]], {
      icon: groomerIcon,
    })
      .bindPopup(
        `
        <p> ${pos.properties.Location["Business Name"]} </p>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .addTo(groomerLayer);
  }
  return;
}
async function getDogrunLayer() {
  let dogrunResponse = await axios.get("data/dog-run.geojson");
  let dogrunObjects = dogrunResponse.data.features;
  for (let i = 0; i < dogrunObjects.length; i++) {
    let pos = dogrunObjects[i];
    let dogrunCoordinates = pos.geometry.coordinates;
    // console.log(dogrunCoordinates, pos.properties.Location["Business Name"]);
    L.marker([dogrunCoordinates[1], dogrunCoordinates[0]])
      .bindPopup(
        `
        <p> ${pos.properties.Location["Business Name"]} </p>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .addTo(dogrunLayer);
  }
  return;
}
async function getPetpoolLayer() {
  let petpoolResponse = await axios.get("data/pet-pool.geojson");
  let petpoolObjects = petpoolResponse.data.features;
  for (let i = 0; i < petpoolObjects.length; i++) {
    let pos = petpoolObjects[i];
    let petpoolCoordinates = pos.geometry.coordinates;
    // console.log(petpoolCoordinates, pos.properties.Location["Business Name"]);
    L.marker([petpoolCoordinates[1], petpoolCoordinates[0]])
      .bindPopup(
        `
        <p> ${pos.properties.Location["Business Name"]} </p>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .addTo(petpoolLayer);
  }
  return;
}
async function getFoodLayer() {
  let foodResponse = await axios.get("data/food.geojson");
  let foodObjects = foodResponse.data.features;
  for (let i = 0; i < foodObjects.length; i++) {
    let pos = foodObjects[i];
    let foodCoordinates = pos.geometry.coordinates;
    // console.log(foodCoordinates, pos.properties.Location["Business Name"]);
    L.marker([foodCoordinates[1], foodCoordinates[0]])
      .bindPopup(
        `
        <p> ${pos.properties.Location["Business Name"]} </p>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .addTo(foodLayer);
  }
  return;
}
async function getHotelLayer() {
  let hotelResponse = await axios.get("data/hotel.geojson");
  let hotelObjects = hotelResponse.data.features;
  for (let i = 0; i < hotelObjects.length; i++) {
    let pos = hotelObjects[i];
    let hotelCoordinates = pos.geometry.coordinates;
    // console.log(hotelCoordinates, pos.properties.Location["Business Name"]);
    L.marker([hotelCoordinates[1], hotelCoordinates[0]])
      .bindPopup(
        `
        <p> ${pos.properties.Location["Business Name"]} </p>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .addTo(hotelLayer);
  }
  return;
}

async function addMapLayers() {
  await getBoardingLayer();
  await getGroomerLayer();
  await getDogrunLayer();
  await getPetpoolLayer();
  await getFoodLayer();
  await getHotelLayer();

  let baseLayers = {};
  let overlays = {
    "Pet Boarding": boardingLayer,
    Groomers: groomerLayer,
    "Dog-run": dogrunLayer,
    "Pet Pools": petpoolLayer,
    "Pet-friendly restaurants": foodLayer,
    "Pet-friendly staycation": hotelLayer,
  };

  L.control.layers(baseLayers, overlays, { collapsed: false }).addTo(map);
}

window.addEventListener("DOMContentLoaded", async (event) => {
  // setup event listeners here
  await addMapLayers();
});
