const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.error(error));
};
