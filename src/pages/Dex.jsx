import React, { useEffect } from "react";
import MOCK_DATA from "../data/mockData";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../redux/slice";
import { toast } from "react-toastify";

const Dex = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  useEffect(() => {
    toast(`🎁 나만의 포켓몬 세계를 완성해보세요!`);
    toast.info(`각 포켓몬을 클릭하면 상세 정보를 확인할 수 있습니다.`);
  }, []);

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
