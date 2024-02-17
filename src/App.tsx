import { useEffect, useState } from "react";
import "./App.css";

import { PokemonListAPI } from "./domains/api/PokemonListAPI";
import { PokeCard } from "./components/PokeCard";

function App() {
  const [pokes, setPokes] = useState<PokemonListAPI["results"]>([]);

  const fetchAll = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=9999999"
    );
    const data: PokemonListAPI = await response.json();
    setPokes(data.results);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <h1>Poke App Example</h1>
      <div className="poke-cards-wrapper">
        {pokes.map((poke) => (
          <PokeCard key={poke.name} name={poke.name} />
        ))}
      </div>
    </>
  );
}

export default App;
