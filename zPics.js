let map = L.map('speciesmapTest', {
  zoomControl: false},).setView([0, 0], 0);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 0,
}).addTo(map);

L.tileLayer(
  'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=4504&bin=hex&hexPerTile=70&style=blue.marker',
  {
    maxZoom: 0,
  }
).addTo(map);

map.attributionControl.setPrefix(false);

