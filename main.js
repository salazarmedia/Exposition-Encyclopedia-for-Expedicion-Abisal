const infoTemplate = document.querySelector('.info-template');
const searchInput = document.querySelector('[info-search]');
const speciesCardContainer = document.querySelector(
  '[data-species-card-container]'
);

let species = [];

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  species.forEach((specie) => {
    const isVisible =
      specie.name.toLowerCase().includes(value) ||
      specie.desc.toLowerCase().includes(value);
    specie.elem.classList.toggle('hide', !isVisible);
  });
});

fetch('./species.json')
  .then((res) => res.json())
  .then((data) => {
    species = data.map((specie) => {
      const card = infoTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector('[data-header]');
      const body = card.querySelector('[data-body]');
      const miniMap = card.querySelector('[mini-map]');
      const linkText = specie.link;
      header.textContent = specie.nombre;
      body.textContent = specie.descripcionMain;
      miniMap.src = specie.imgLink;
      miniMap.setAttribute('class', 'minMap');
      miniMap.setAttribute('alt', 'Mapa de registros de ' + specie.nombre);
      card.addEventListener('click', () => {
        window.location=linkText;;
      });
      speciesCardContainer.append(card);
      return { name: specie.nombre, desc: specie.descripcionMain, mapa: specie.imgLink, elem: card };
    });
  });
