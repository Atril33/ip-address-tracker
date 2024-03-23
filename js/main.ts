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
const searchButton = document.getElementById('searchButton') as HTMLButtonElement;
const inputField = document.getElementById('inputField') as HTMLInputElement;
const ipShow = document.getElementById('ip-show') as HTMLParagraphElement;
const locationShow = document.getElementById('location-show') as HTMLParagraphElement;
const timeZoneShow = document.getElementById('timezone-show') as HTMLParagraphElement;
const ispShow = document.getElementById('isp-show') as HTMLParagraphElement;


const getIpData = async (userSearchQuery) => {
    await fetch (
        `https://geo.ipify.org/api/v2/country?apiKey=at_B9bmyccR4ayluqaLqfVVPuqtxpHqp&domain=${userSearchQuery}`
    )
    .then((response) => response.json())
    .then ((data) => {
        ipShow.innerText = data.ip;
        locationShow.innerText = data.location.region;
        timeZoneShow.innerText = data.location.timezone;
        ispShow.innerText = data.isp;
    })
}

if (inputField.value === '') {
    getIpData('')
} 
  
  searchButton.addEventListener('click', () => {
    getIpData(inputField.value)
})





