import milobellusImg from "../assets/milobellus.jpg";

function PokemonCard() {
  return (
    <figure>
      <img src={milobellusImg} alt="Milobellus" />
      <figcaption>Milobellus</figcaption>
    </figure>
  );
}

export default PokemonCard;
