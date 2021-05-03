fetch("https://pokeapi.co/api/v2/pokemon", {
  headers: {
    "content-type": "application/json",
  },
})
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    json.results.forEach((element) => {
      fetch(element.url, {
        headers: {
          "content-type": "application/json",
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((json) => {
          let data = [];
          data.push(json);
          createPokeCard(data);
        });
    });
  });

function createPokeCard(obj) {
  let newPokeCard = document.createElement("poke-card");
  var newImg = obj[0].sprites.front_default;
  // ninguno de estas dos valores esta llegando al componente, llegan como null
  newPokeCard.pokemonName = obj[0].species.name;
  newPokeCard.pokemonImg = newImg;
  // el type esta funcionando
  newPokeCard.pokemonElement = obj[0].types[0].type.name;

  document.body.appendChild(newPokeCard);
}
