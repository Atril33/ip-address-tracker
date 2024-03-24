"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mainBodyHeader = document.getElementsByTagName('header')[0];
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
<div id="map"></div>
`;
const searchButton = document.getElementById('searchButton');
const inputField = document.getElementById('inputField');
const ipShow = document.getElementById('ip-show');
const locationShow = document.getElementById('location-show');
const timeZoneShow = document.getElementById('timezone-show');
const ispShow = document.getElementById('isp-show');
let latData;
let lngData;
const getIpData = (userSearchQuery) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_B9bmyccR4ayluqaLqfVVPuqtxpHqp&domain=${userSearchQuery}`)
        .then((response) => response.json())
        .then((data) => {
        ipShow.innerText = data.ip;
        locationShow.innerText = data.location.region;
        timeZoneShow.innerText = data.location.timezone;
        ispShow.innerText = data.isp;
        latData = data.location.lat;
        lngData = data.location.lng;
        if (data.isp.length > 25) {
            ispShow.style.fontSize = '12px';
        }
        else {
            ispShow.style.fontSize = '22px';
        }
    });
});
if (inputField.value === '') {
    getIpData('');
}
searchButton.addEventListener('click', () => {
    getIpData(inputField.value);
});
