var map1 = L.map('map1').setView([43.074686703871194, -89.38416937077398], 13);
L.tileLayer('https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	accessToken: 'ClCgqGiWOEuP4wdQmIH9NSExZfzBtbQHV7DHv6s849DKRxotJECKXtBDW9uA7OU6'
}).addTo(map1);

var map2 = L.map('map2').setView([33.957705582633835, -83.37524902177003], 13);
L.tileLayer('https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	accessToken: 'ClCgqGiWOEuP4wdQmIH9NSExZfzBtbQHV7DHv6s849DKRxotJECKXtBDW9uA7OU6'
}).addTo(map2);

L.control.scale().addTo(map1);

L.control.scale().addTo(map2);

function syncMap1() {
	var map1Center = map1.getCenter();
	var map2Zoom = map2.getZoom();
	map1.setView(map1Center, map2Zoom);
}

function syncMap2() {
	var map2Center = map2.getCenter();
	var map1Zoom = map1.getZoom();
	map2.setView(map2Center, map1Zoom);
}

map1.on('zoom', syncMap2);
map2.on('zoom', syncMap1);

