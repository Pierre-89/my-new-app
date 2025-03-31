

function ImgPokemon({ imgSrc }: { imgSrc?: string }) {
  return imgSrc ? <img src={imgSrc} alt="illu du pokemon" /> : <p>???</p>;
}

function PokemonCard({ pokemon }) {
  return (
    <figure>
      <ImgPokemon imgSrc={pokemon.imgSrc} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
