var mymap = L.map('mapid').setView([-23.52, -46.72], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFvbmkxOTg0IiwiYSI6ImNqZjhobmh4cjBsNWg0MHBkY2JkYTh2Y28ifQ.L72UMucereEftETAoMN1SQ'
}).addTo(mymap);

var littleton = L.marker([-23.55, -46.69]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([-23.54, -46.70]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([-23.53, -46.71]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([-23.52, -46.72]).bindPopup('This is Golden, CO.');

var locais = L.layerGroup([littleton, denver, aurora, golden]).addTo(mymap);


var marker = L.marker([-23.5489, -46.6388]).addTo(mymap);

var circle = L.circle([-23.541, -46.737], {
    color: 'yellow',
    fillColor: '#f56',
    fillOpacity: 0.3,
    radius: 500
}).addTo(mymap);

marker.bindPopup("<b>Dados do Ponto:</b><br>Cliente dados.").openPopup();
circle.bindPopup("Ponto");

var popup = L.popup();
   

function onMapClick(e) {
    popup
        .setLatLng([-23.52, -46.72])
        .setContent("Coordenadas:  " + e.latlng)
        .openOn(mymap);
}

mymap.on('click', onMapClick);

