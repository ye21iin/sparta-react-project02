import React, { useEffect } from "react";
import MOCK_DATA from "../data/mockData";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../redux/slice";

const Dex = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(setPokemons(MOCK_DATA));
    }
  }, [dispatch, pokemons.length]);

  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
