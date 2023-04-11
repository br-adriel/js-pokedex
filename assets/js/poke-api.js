const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((res) => res.json());
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.error(error));
};
