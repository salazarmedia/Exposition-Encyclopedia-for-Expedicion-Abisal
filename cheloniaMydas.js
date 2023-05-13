const page = document.querySelector('[main-part-template]');
const mainContainer = document.querySelector('[main-part-wrapper]');

let map = L.map('speciesmap').setView([0, 0], 1);

fetch('./species.json')
  .then((res) => res.json())
  .then((data) => {
    const spPage = page.content.cloneNode(true).children[0];
    const title = spPage.querySelector('[species-name]');
    const subtitle = spPage.querySelector('[species-sc-name]');
    const text = spPage.querySelector('[species-desc]');
    title.textContent = data[0].nombre;
    subtitle.textContent = data[0].nombreCientifico;
    text.textContent = data[0].descripcionLong;
mainContainer.append(spPage);
    console.log(title);
  });


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=2442225&bin=hex&hexPerTile=50&style=iNaturalist.poly', {
    maxZoom: 19,
}).addTo(map);

