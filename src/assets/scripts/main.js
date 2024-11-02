/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import L from 'leaflet';
import * as pallarsSobira from '../pallars-sobira.json';

/**
 * Write any other JavaScript below
 */
const DefaultIcon = L.icon({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [24, 36],
  iconAnchor: [12, 36]
});

L.Marker.prototype.options.icon = DefaultIcon;

const map = L.map('map').setView([42.5414, 1.1728], 10);

L.geoJSON(pallarsSobira).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
