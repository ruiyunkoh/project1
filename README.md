# Activities for Pets and Pawrents

By: <b>Koh Rui Yun</b>

# 1. Project Summary
The project aims to build a website and an interactive map for Pawrents to explore pet-friendly facilities in Singapore. 
Due to the context of Singapore, there are limitations on the places and activities that pets can be involved in. Therefore, via the map element of this project, 
users may find activities suitable for their furkids. 
As each facility/place has been researched on and checked to ensure it is pet-friendly, it eliminates the uncertainties faced by Pawrents or unnecessary shock faced by passerbys, since every party is well aware of what to expect.

To sum it up, 
User's goal: To find the type of facility to bring their pets to, in the area of their choice. 
Site owner's goal: the project aims to promote inclusiveness of furkids in their Pawrent's activities.

You may visit the live site here: https://ruiyunkoh.github.io/project1/

# 2. Project Complexity Matrix

| Project Complexity Items  | Instances      |
| :------------ |   :---       | 
| Consume JSON file        | There are a total of 6 geoJson files, downloaded from googlemaps, that are being loaded on the map         |
| Adding or removing DOM elements to the display based on user's actions         | users are able to add or remove layers using form elements         |
|Modifying the CSS of DOM elements based on user's actions | toggle button is available for users to decide whether the control panel should stay up or be hidden. Users may also click onto individual markers for a zoomed view of the map, or clicking the reset button for the map view to return to normal. |
|Use of 1D traversal of array | for loop is used to access data in geoJson files for the search function search function |
|Each use of a unique functional mapping method | map is used in 2 instances - in generating marker cluster, and used in the search function|
|Each use of CSS layout technique | Bootstrap is used on the Home webpage. Flex box is used generously for positioning of elements. |
|Each possible search or filtering criteria in the user interface | There are 3 main options available. Users may filter using drop down options to zoom into specific regions, and/or filter out types of amenities they wish to see using checkbox, or searching for places using the search function.|
|Each case of the map updating based on the user's actions | users can control what they see on the map via the options available in control panel|
|Each group of layers in the Leaflet map | there are total of 6 layers|
|Each group of marker clustering | there are total of 6 marker cluster groups|
|Each type of custom marker | there are total of 6 types of markers using images|
  
  
# 3. UIUX/Features

3.1 UI/UX

  3.1.1 Identifying user stories 
  a. As a user, I want to see all available pet-friendly facilities, so that I can include my pet in my activities. 
  b. As a user, I want to have a website with information useful to pet owners, so that I can apply the information to my pet.
  
  3.1.2 Acceptance criteria
  a. Map consists of various types of facilities/activities that users can choose from.
  b. Map can be adjusted to various regions in Singapore, showing available facilities in that zone.
  c. Users can search for the facility, if they have any in mind, which would appear on the map for their viewing.
  d. Facilities should have been properly researched on to ensure that they are indeed pet-friendly to avoid confusion. 
  e. Web application should also contain relevant information that pet owners may miss out.

  3.1.3 Wireframe and Five Planes of UI/UX
  The project consists of mainly 2 pages: (i) Home page (ii) Map application, in order to provide users a wholistic view of this project. 
  
  (i) Home Page
  <li> The Home Page features a clean interface, with the Navbar being used as the main navigator around the page using smooth scrolling behaviour. 
  <li> Home page consists of a section on information useful to Pawrents, presented using Bootstrap's card - to show information in tidbit forms. 
  <li> For the visual design, in order to grab the target audience's attention (Pet owners), the Home page uses happy animal images, that take up the full view size. 
  <li> Home page also consists of an "Enter Map" button, that when clicked, the full sized map application will appear. 
    
  (ii) Map appliation
  <li> The control panel and its buttons features neutral and pastel colors, so users are able to focus their attention on the locations generated on the map. 
  <li> Users are able to control what they see on the map via a consolidated control panel, on the bottom left of the screen. This control panel ensures feasibility when using a smaller device, and also gives users a choice to close it when they wish to have an unobstructed view of the map. 
    Functions to control the map are all on this control panel, such that the map application page does not appear cluttered, or having too many buttons leaving the user confused. 
  <li> A large "Home" button is on the top left of the screen so that users know they are able to toggle back to the main Home page. 
  <li> The map icons are specially chosen to correspond to the type of facility/activity. 
  
  You may find wireframes here: 
    
3.2 Features
<li> The main feature of the web application is the map page, whereby users are able to choose specific icons from the map corresponding to the type of activities they wish to engage with their map. Upon clicking on the icon, it would trigger a map zoom, and a pop-up will appear showing the place name and address. 
<li> Although not yet implemented, a feature that is in consideration, and a plus to have that would work well with the map, is if users are able to check off places they have already visited with their pets. 
  
# 4. Implementation

4.1 Technologies used
<li> HTML, CSS and JavaScript
<li> Visual Studio Code
<li> [Leaflet API](https://leafletjs.com/)
  
  
4.2 Testing

| Test Case #  | Test Case Description  | Test steps | Expected Result       |
| :------------|:---------------------- |:---------- |:--------------------- |
|1 Home | Mobile responsive check | Checking display on various screen sizes via inspection | No display error |
|2 Home | To check that Navbar Links work | 1. Clicking on Navlinks to ensure scrolling to section works <br> 2. Repeated step 1 with collapsed Navbar button on a small screen | Scrolling works when each Navlink is clicked |
|3 Map | Mobile responsive check | Checking display on various screen sizes via inspection | No display error |
|4 Map | Display of map application on load | Open map link | Map should show control panel open, with all layers shown, and region zoom set as "Show all" |
|5 Map | Clicking on "Home" button | Clicked on Home button on the map | Brings user back to Home page |
|6 Map | Testing of Map filtering | 1. Region Zoom drop-down filter: Selecting each option <br> 2. Filtering by amenities (map layers): Unchecked and re-checked several filtering checkboxes <br> 3. Reset button: Click on the reset button after region zoom filter or amenities filter was changed | 1. Map should zoom into specified region as selected <br> 2. Unchecked amenities should disappear from map, and appear again when checked <br> 3. Map should re-centre to show all regions and all amenities should appear again |
|7 Map | Testing of search function | Search random word "Jurong" | Map should clear out of default icons, and only show the icon of search result. The bottom of search box should show user "1 search result found.." |
|8 Map | Testing of reset button after using search | Click on reset button after Test case # 7 | Map should re-centre to show all regions and all amenities should appear again |
  
# 5. Deployment

<li> The project was built on Visual Studio Code and monitored using Visual Studio Code Live Server.
<li> The pProject was committed, staged, and pushed to GitHub on a usual basis. 
<li> The Github repository https://github.com/ruiyunkoh/project1 was created, before the master branch of the website is deployed and saved to the Github pages.
<li> All images, javascript, css are in their respective section folders, the main site named index.html and the README file in the root folder.

# 6. Credits
  <li> [Leaflet API](https://leafletjs.com/)
  <li> [Google Maps](https://www.google.com/maps)
  <li> [FontAwesome](https://fontawesome.com/v5.15/icons)
  <li> [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
  <li> [Pet icon](https://www.clipartmax.com/middle/m2H7N4N4G6d3A0G6_chinese-wind-twelve-zodiac-signs-instagram-highlights-pet-icon/)
  <li> [Dog image 1](https://www.pupvine.com/male-vs-female-corgi/)
  <li> [Dog image 2](https://www.runsociety.com/highlight/a-guide-to-running-with-dogs/)
  <li> [Map icons](https://icons8.com/icon/)
