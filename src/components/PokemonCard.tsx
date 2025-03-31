

function ImgPokemon({ imgSrc }: { imgSrc?: string }) {
  return imgSrc ? <img src={imgSrc} alt="illu du pokemon" /> : <p>???</p>;
}

interface Pokemon {
  name : string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {

  return (
    <figure>
      <ImgPokemon imgSrc={pokemon.imgSrc} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
