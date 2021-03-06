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
    map.setView([1.4491, 103.8185], 13);
  }

  if (selectElement == "central") {
    map.setView([1.3048, 103.8318], 13);
  }

  if (selectElement == "east") {
    map.setView([1.3236, 103.9273], 13);
  }

  if (selectElement == "west") {
    map.setView([1.3162, 103.7649], 13);
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

// clicking of tabs in control panel
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//search button clicked
document.querySelector("#search-btn").addEventListener("click", function () {
  map.removeLayer(boardingLayer);
  map.removeLayer(groomerLayer);
  map.removeLayer(dogrunLayer);
  map.removeLayer(petpoolLayer);
  map.removeLayer(foodLayer);
  map.removeLayer(hotelLayer);
  document.getElementById("pet-boarding").checked = false;
  document.getElementById("groomers").checked = false;
  document.getElementById("dog-run").checked = false;
  document.getElementById("pet-pools").checked = false;
  document.getElementById("restaurants").checked = false;
  document.getElementById("staycation").checked = false;
});
