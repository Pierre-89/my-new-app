const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function ImgPokemon({ imgSrc }: { imgSrc?: string }) {
  return imgSrc ? <img src={imgSrc} alt="illu du pokemon" /> : <p>???</p>;
}

function PokemonCard() {
  const pokemon = pokemonList[1];
  return (
    <figure>
      <ImgPokemon imgSrc={pokemon.imgSrc} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
