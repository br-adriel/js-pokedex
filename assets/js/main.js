const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
let currentPage = 1;
let pokemonCount = 0;
const maxPokemonCount = 151;

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join('')}
        </ol>

        <img
          src="${pokemon.photo}"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `;
}

loadMoreButton.addEventListener('click', () => {
  currentPage++;
  loadPage(currentPage);
});

function loadPage(page = 1) {
  pokeApi.getPokemons(page * 12 - 12, 12).then((data) => {
    pokemonCount += data.length;

    if (pokemonCount < maxPokemonCount) {
      pokemonList.innerHTML += data.map(convertPokemonToLi).join('');
    } else {
      const excess = pokemonCount - maxPokemonCount;
      const newData = data.slice(0, data.length - excess);
      pokemonList.innerHTML += newData.map(convertPokemonToLi).join('');
    }
  });
}

loadPage();
