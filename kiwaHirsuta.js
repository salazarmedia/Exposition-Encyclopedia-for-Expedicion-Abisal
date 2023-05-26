const page = document.querySelector('[main-part-template]');
const mainContainer = document.querySelector('[main-part-wrapper]');

let map = L.map('speciesmap', {zoomDelta: 0.25,
zoomSnap: 0}).setView([10, 0], 0.75);
let taxonKey;

fetch('./species.json')
  .then((res) => res.json())
  .then((data) => {
    const spPage = page.content.cloneNode(true).children[0];
    const title = spPage.querySelector('[species-name]');
    const subtitle = spPage.querySelector('[species-sc-name]');
    const text = spPage.querySelector('[species-desc]');
    title.textContent = data[10].nombreMain;
    subtitle.textContent = data[10].nombreCientifico;
    text.textContent = data[10].descripcionLong;
    taxonKey = data[10].taxonKey;
    L.tileLayer(
      'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=' + taxonKey + '&bin=hex&hexPerTile=50&style=purpleWhite.poly',
      {
        maxZoom: 19,
      }
    ).addTo(map);
    mainContainer.append(spPage);
  });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);



map.attributionControl.setPrefix(false);
