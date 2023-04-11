const pokemonList = document.getElementById('pokemonList');

function convertPokemonTypeToLi(pokemonTypes) {
  return pokemonTypes.map((pt) => {
    return `
    <li class="type">${pt.type.name}</li>
  `;
  });
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          ${convertPokemonTypeToLi(pokemon.types).join('')}
        </ol>

        <img
          src="${pokemon.sprites.other.dream_world.front_default}"
          alt="Bulbasaur"
        />
      </div>
    </li>
  `;
}

function loadPage() {
  pokeApi.getPokemons().then((data) => {
    pokemonList.innerHTML = data.map(convertPokemonToLi).join('');
  });
}

loadPage();
