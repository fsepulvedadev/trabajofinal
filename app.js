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
  /* let currentDiv = document.querySelector(".container") */
  var newImg = obj[0].sprites.front_default;
  newPokeCard.pokemonName = obj[0].species.name;
  newPokeCard.pokemonImg = newImg;
  newPokeCard.pokemonElement = obj[0].types[0].type.name;

  document.body.appendChild(newPokeCard);
}
