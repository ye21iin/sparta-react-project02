import React, { useEffect, useState } from "react";
import MOCK_DATA from "../data/mockData";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(MOCK_DATA);
  });
  console.log(pokemons);
  return (
    <>
      <Dashboard></Dashboard>
      <PokemonList pokemons={pokemons}></PokemonList>
    </>
  );
};

export default Dex;
