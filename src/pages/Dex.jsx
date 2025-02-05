import React, { useContext, useEffect } from "react";
import MOCK_DATA from "../data/mockData";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonContext } from "../context/PokemonContext";

const Dex = () => {
  const { setPokemons } = useContext(PokemonContext);

  useEffect(() => {
    setPokemons(MOCK_DATA);
  }, [setPokemons]);

  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
