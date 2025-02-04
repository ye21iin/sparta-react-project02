import React, { useEffect, useState } from "react";
import MOCK_DATA from "../data/mockData";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState([
    { id: "test", korean_name: "test" },
  ]);

  useEffect(() => {
    setPokemons(MOCK_DATA);
  });

  return (
    <>
      <Dashboard selected={selected}></Dashboard>
      <PokemonList pokemons={pokemons}></PokemonList>
    </>
  );
};

export default Dex;
