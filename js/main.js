/**
 * Created by Sanat Moningi
 */

//Setting up leaflet map
var map = L.map('map').setView([37.7833, -122.4167], 14);
//Storing latest energy report data locally
var energyDict = {};
var color; //Color bins

//Getting tile from Mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    minZoom: 13,
    attributionControl: false,
    id: 'smoningi.a304c3dc',
    accessToken: 'pk.eyJ1Ijoic21vbmluZ2kiLCJhIjoiQ21rN1pjSSJ9.WKrPFjjb7LRMBjyban698g'
}).addTo(map);
