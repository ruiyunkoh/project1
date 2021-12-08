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
  // iconAnchor: [22, 94],
  // popupAnchor: [-3, -76],
  // shadowUrl: "my-icon-shadow.png",
  // shadowSize: [68, 95],
  // shadowAnchor: [22, 94],
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
  // Pet boarding locator marker cluster group
  let boardingResponse = await axios.get("data/pet-boarding.geojson");
  let boardingObjects = boardingResponse.data.features;
  let boardingMarkerCluster = L.markerClusterGroup();
  for (let i = 0; i < boardingObjects.length; i++) {
    let pos = boardingObjects[i];
    let boardingCoordinates = pos.geometry.coordinates;

    L.marker([boardingCoordinates[1], boardingCoordinates[0]], {
      icon: boardingIcon,
    })
      .bindPopup(
        `
    <b> ${pos.properties.Location["Business Name"]} </b>
    <p> Address: ${pos.properties.Location.Address}</p>
    `
      )
      .on("click", function (e) {
        map.setView(e.latlng, 14);
      })
      .addTo(boardingMarkerCluster);
  }

  //Pet Groomer locator marker cluster group
  let groomerResponse = await axios.get("data/groomers.geojson");
  let groomerObjects = groomerResponse.data.features;
  let groomerMarkerCluster = L.markerClusterGroup();
  for (let i = 0; i < groomerObjects.length; i++) {
    let pos = groomerObjects[i];
    let groomerCoordinates = pos.geometry.coordinates;
    L.marker([groomerCoordinates[1], groomerCoordinates[0]], {
      icon: groomerIcon,
    })
      .bindPopup(
        `
        <b> ${pos.properties.Location["Business Name"]} </b>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .on("click", function (e) {
        map.setView(e.latlng, 14);
      })
      .addTo(groomerMarkerCluster);
  }

  //Dog-run locator marker cluster group
  let dogrunResponse = await axios.get("data/dog-run.geojson");
  let dogrunObjects = dogrunResponse.data.features;
  let dogrunMarkerCluster = L.markerClusterGroup();
  for (let i = 0; i < dogrunObjects.length; i++) {
    let pos = dogrunObjects[i];
    let dogrunCoordinates = pos.geometry.coordinates;
    L.marker([dogrunCoordinates[1], dogrunCoordinates[0]], { icon: runIcon })
      .bindPopup(
        `
        <b> ${pos.properties.Location["Business Name"]} </b>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .on("click", function (e) {
        map.setView(e.latlng, 14);
      })
      .addTo(dogrunMarkerCluster);
  }

  //Pet-pool locator marker cluster group
  let petpoolResponse = await axios.get("data/pet-pool.geojson");
  let petpoolObjects = petpoolResponse.data.features;
  let petpoolMarkerCluster = L.markerClusterGroup();
  for (let i = 0; i < petpoolObjects.length; i++) {
    let pos = petpoolObjects[i];
    let petpoolCoordinates = pos.geometry.coordinates;
    L.marker([petpoolCoordinates[1], petpoolCoordinates[0]], { icon: poolIcon })
      .bindPopup(
        `
        <b> ${pos.properties.Location["Business Name"]} </b>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .on("click", function (e) {
        map.setView(e.latlng, 14);
      })
      .addTo(petpoolMarkerCluster);
  }

  //food locator marker cluster group
  let foodResponse = await axios.get("data/food.geojson");
  let foodObjects = foodResponse.data.features;
  let foodMarkerCluster = L.markerClusterGroup();
  for (let i = 0; i < foodObjects.length; i++) {
    let pos = foodObjects[i];
    let foodCoordinates = pos.geometry.coordinates;
    L.marker([foodCoordinates[1], foodCoordinates[0]], { icon: foodIcon })
      .bindPopup(
        `
        <b> ${pos.properties.Location["Business Name"]} </b>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .on("click", function (e) {
        map.setView(e.latlng, 14);
      })
      .addTo(foodMarkerCluster);
  }

  //Hotel locator marker cluster group
  let hotelResponse = await axios.get("data/hotel.geojson");
  let hotelObjects = hotelResponse.data.features;
  let hotelMarkerCluster = L.markerClusterGroup();
  for (let i = 0; i < hotelObjects.length; i++) {
    let pos = hotelObjects[i];
    let hotelCoordinates = pos.geometry.coordinates;
    L.marker([hotelCoordinates[1], hotelCoordinates[0]], { icon: hotelIcon })
      .bindPopup(
        `
        <b> ${pos.properties.Location["Business Name"]} </b>
        <p> Address: ${pos.properties.Location.Address}</p>
        `
      )
      .on("click", function (e) {
        map.setView(e.latlng, 14);
      })
      .addTo(hotelMarkerCluster);
  }

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
