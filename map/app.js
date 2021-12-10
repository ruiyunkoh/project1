//Filtering of map layers options

document.querySelector("#pet-boarding").addEventListener("change", function () {
  if (map.hasLayer(boardingLayer)) {
    map.removeLayer(boardingLayer);
  } else {
    map.addLayer(boardingLayer);
  }
});

document.querySelector("#groomers").addEventListener("change", function () {
  if (map.hasLayer(groomerLayer)) {
    map.removeLayer(groomerLayer);
  } else {
    map.addLayer(groomerLayer);
  }
});

document.querySelector("#dog-run").addEventListener("change", function () {
  if (map.hasLayer(dogrunLayer)) {
    map.removeLayer(dogrunLayer);
  } else {
    map.addLayer(dogrunLayer);
  }
});

document.querySelector("#pet-pools").addEventListener("change", function () {
  if (map.hasLayer(petpoolLayer)) {
    map.removeLayer(petpoolLayer);
  } else {
    map.addLayer(petpoolLayer);
  }
});

document.querySelector("#restaurants").addEventListener("change", function () {
  if (map.hasLayer(foodLayer)) {
    map.removeLayer(foodLayer);
  } else {
    map.addLayer(foodLayer);
  }
});

document.querySelector("#staycation").addEventListener("change", function () {
  if (map.hasLayer(hotelLayer)) {
    map.removeLayer(hotelLayer);
  } else {
    map.addLayer(hotelLayer);
  }
});

// Filtering by regions

function zoomOnSelect() {
  let selectElement = document.querySelector("#singapore-regions").value;

  if (selectElement == "north") {
    map.setView([1.4491, 103.8185], 14);
  }

  if (selectElement == "central") {
    map.setView([1.3048, 103.8318], 14);
  }

  if (selectElement == "east") {
    map.setView([1.3236, 103.9273], 14);
  }

  if (selectElement == "west") {
    map.setView([1.3162, 103.7649], 14);
  }

  if (selectElement == "all") {
    map.setView([1.3521, 103.8198], 12);
  }
}

// Reset zoom to original
document.querySelector(".reset-button").addEventListener("click", function () {
  map.setView([1.3521, 103.8198], 12);
  map.addLayer(boardingLayer);
  map.addLayer(groomerLayer);
  map.addLayer(dogrunLayer);
  map.addLayer(petpoolLayer);
  map.addLayer(foodLayer);
  map.addLayer(hotelLayer);
});

// Sliding in out toggle button
function show() {
  document.getElementById("control-overlay").classList.toggle("active");
}
