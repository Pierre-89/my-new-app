import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import type { Pokemon } from "./components/PokemonCard";

const pokemonList: Pokemon[] = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc: "",
  },
];

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  return (
    <div>
      <h1>Pokémon List</h1>

      <nav>
        {pokemonList.map((pokemon) => (
          <button
            key={pokemon.name}
            onClick={() => setSelectedPokemon(pokemon)}
          >
            {pokemon.name}
          </button>
        ))}
      </nav>


      {selectedPokemon && <PokemonCard pokemon={selectedPokemon} />}
    </div>
  );
}

export default App;
