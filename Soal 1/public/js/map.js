var map = new L.map('map').setView([3.6169589,98.6663069], 5);

L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=qxpu8H0Kmdim4FTXF1PW', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

L.marker([3.6169589,98.6663069]).addTo(map)
    .bindPopup('You clicked marker: 1');

L.marker([3.1,98.1]).addTo(map)
    .bindPopup('You clicked marker: 2');