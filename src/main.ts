
const mainBodyHeader = document.getElementsByTagName('header')[0] as HTMLElement;


mainBodyHeader.innerHTML = `
<h1>IP Address Tracker</h1>
<div class="input-container">
<input type="text" placeholder="Search for any IP address or domain" id="inputField">
<button id="searchButton"><img src="assets/icon-arrow.svg" alt="Search Arrow Icon"></button>
</div>
<div class="overlay-info-container">
<div class="small-info-container">
<h2>IP Address</h2>
<p id="ip-show"><i class="fa fa-spinner fa-spin" style="font-size:24px"></i></p>
</div>
<div class="small-info-container">
<h2>Location</h2>
<p id="location-show"><i class="fa fa-spinner fa-spin" style="font-size:24px"></i></p>
</div>
<div class="small-info-container">
<h2>Timezone</h2>
<p id="timezone-show"><i class="fa fa-spinner fa-spin" style="font-size:24px"></i></p>
</div>
<div class="small-info-container">
<h2>Isp</h2>
<p id="isp-show"><i class="fa fa-spinner fa-spin" style="font-size:24px"></i></p>
</div>
</div>
<div class="map-container-manual">
<div id="map"></div>
</div>
`
const searchButton = document.getElementById('searchButton') as HTMLButtonElement;
const inputField = document.getElementById('inputField') as HTMLInputElement;
const ipShow = document.getElementById('ip-show') as HTMLParagraphElement;
const locationShow = document.getElementById('location-show') as HTMLParagraphElement;
const timeZoneShow = document.getElementById('timezone-show') as HTMLParagraphElement;
const ispShow = document.getElementById('isp-show') as HTMLParagraphElement;

 const getIpData = async (userSearchQuery:any) => {
     await fetch (
         `https://geo.ipify.org/api/v2/country,city?apiKey=at_B9bmyccR4ayluqaLqfVVPuqtxpHqp&domain=${userSearchQuery}`
     )
     .then((response) => response.json())
     .then ((data) => {
         ipShow.innerText = data.ip;
         locationShow.innerText = data.location.region;
         timeZoneShow.innerText = data.location.timezone;
         ispShow.innerText = data.isp;
         const latData = data.location.lat;
         const lngData = data.location.lng;   
      
         if(data.isp.length > 25) {
             ispShow.style.fontSize = '12px';
         } else {
             ispShow.style.fontSize = '22px';
         }

         const mapContainer = document.getElementById('map') as HTMLElement;
         if (mapContainer) {
             if ((mapContainer as any)._leaflet_id) {
                 (mapContainer as any)._leaflet_id = null;
                 mapContainer.innerHTML = '';
             }
 
             const map = L.map('map').setView([latData, lngData], 9);
             L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                 maxZoom: 19,
                 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
             }).addTo(map)
             L.marker([latData, lngData]).addTo(map);
         }      
     }) 
 }

 if (inputField.value === '') {
     getIpData('')
 }  

  


   searchButton.addEventListener('click', () => {
     getIpData(inputField.value)
    inputField.value = '';
 }) 

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.505, -0.09]).addTo(map);
