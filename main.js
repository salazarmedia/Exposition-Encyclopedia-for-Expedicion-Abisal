const infoTemplate = document.querySelector('[info-template]');
const searchInput = document.querySelector('[info-search]');

let species = [];

document.getElementById('sBtn').onclick = function () {
  searchButton();
};

function searchButton() {
  console.log('button worked');
}

searchInput.addEventListener('input', (e) => {
  const value = e.target.value;
  species.forEach((specie) => {
    const isVisible =
      specie.name.includes(value) || specie.description.includes(value);
    specie.getElementById.classList.toggle('hide', !isVisible);
  });
});

fetch ('species.json')
.then(res => res.json())
.then(data => {
    
})
