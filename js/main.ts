const mainBodyHeader = document.getElementsByTagName('header')[0] as HTMLElement;

mainBodyHeader.innerHTML = `
<h1>IP Address Tracker</h1>
<input type="text" placeholder="Search for any IP address or domain" id="inputField">
<button id="searchButton">></button>
<div class="overlay-info-container>
<div class="small-info-container">
<h2>IP Address</h2>
<p id="ip-show"></p>
</div>
<div class="small-info-container">
<h2>Location</h2>
<p id="location-show"></p>
</div>
<div class="small-info-container">
<h2>Timezone</h2>
<p id="timezone-show"></p>
</div>
<div class="small-info-container">
<h2>Isp</h2>
<p id="isp-show"></p>
</div>
</div>
<div class="container">
</div>
`