const pokeCardTemplate = `
<style>
        .poke-card-style {
            width: 120px;
            height: 170px;
            background-color: goldenrod;
            text-align: center;
            cursor: pointer;
            border-radius: 5%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .type {
            justify-self: flex-start;
            align-self: flex-start;
            width: 1.5rem;
            background-color: black;
            border-top-left-radius: 15%;
            border-bottom-right-radius: 75%;
        }
    </style>

    <div class="poke-card-style">
        <div id='element' class="type"></div>
        <img id='image' src="#" alt="">
        <h3 id='name'></h3>
    </div>
    `;

class PokeCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = pokeCardTemplate;
  }

  get pokemonName() {
    return this.shadowRoot.querySelector("#name").innerHTML;
  }

  set pokemonName(newPokemonName) {
    this.shadowRoot.querySelector("#name").innerHTML = newPokemonName;

    this.getAttribute("pokemonName, newPokemonName");
  }

  get pokemonImage() {
    return this.shadowRoot.querySelector("#image");
  }

  set pokemonImage(newPokemonImage) {
    this.shadowRoot.querySelector("#image").src = newPokemonImage;
    console.log(this.shadowRoot.querySelector("#image").src);
  }

  get pokemonElement() {
    return this.shadowRoot.querySelector("#element").innerHTML;
  }

  set pokemonElement(newPokemonElement) {
    console.log(newPokemonElement);
    switch (newPokemonElement) {
      case "fire":
        this.shadowRoot.querySelector("#element").innerHTML = "🔥";
        break;
      case "water":
        this.shadowRoot.querySelector("#element").innerHTML = "💧";
        break;
      case "bug":
        this.shadowRoot.querySelector("#element").innerHTML = "🐛";
        break;
      case "grass":
        this.shadowRoot.querySelector("#element").innerHTML = "🌱";
        break;
      case "normal":
        this.shadowRoot.querySelector("#element").innerHTML = "✨";
        break;

      default:
        break;
    }
    /* this.shadowRoot.querySelector("#element").src = newPokemonElement; */
  }

  connectedCallback() {
    this.pokemonName = this.getAttribute("pokemonName");
    this.pokemonImage = this.getAttribute("pokemonImg");
    this.pokemonElement = this.getAttribute("pokemonElement");
  }
}

window.customElements.define("poke-card", PokeCard);
