import { useState } from "react";
import { PokemonDetailAPI } from "../domains/api/PokemonDetailAPI";

type Props = {
  name: string;
};
export const PokeCard = ({ name }: Props) => {
  const [imgUrl, setImgUrl] = useState<string | null>();

  const handleClickShowImage = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data: PokemonDetailAPI = await response.json();
    setImgUrl(data.sprites.back_default);
  };

  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
      {imgUrl && <img alt={name} src={imgUrl} />}
      <button onClick={handleClickShowImage}>Show Image</button>
    </div>
  );
};
