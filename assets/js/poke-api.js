const pokeApi = {};

function convertDetailToPokemon(pokeDetails) {
  const pokemon = new Pokemon();

  pokemon.name = pokeDetails.name;
  pokemon.number = pokeDetails.order;
  pokemon.types = pokeDetails.types.map((typeSlot) => typeSlot.type.name);
  pokemon.type = pokemon.types[0];
  pokemon.photo = pokeDetails.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((res) => res.json())
    .then(convertDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 12) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.error(error));
};
