let offset = 0;
let limit = 10;
const url = `https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`;

const pokemonList = document.getElementById('pokemonList');

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">Bulbasaur</span>

      <div class="detail">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
        </ol>

        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="Bulbasaur"
        />
      </div>
    </li>
  `;
}

function loadPage() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((pokemon) => {
        pokemonList.innerHTML += convertPokemonToLi(pokemon);
      });
    });
}

loadPage();
