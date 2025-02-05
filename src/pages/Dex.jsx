import React, { useEffect, useState } from "react";
import MOCK_DATA from "../data/mockData";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { Outlet } from "react-router-dom";

const Dex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setPokemons(MOCK_DATA);
  }, []);

  const handleAdd = (id) => {
    if (selected.length >= 6) {
      alert("포켓몬 수는 6마리를 초과할 수 없습니다.");
      return;
    }
    if (!selected.includes(id)) {
      const selectedPokemon = pokemons.find((mon) => mon.id === id);
      const newPokemons = pokemons.filter((mon) => {
        return mon.id !== id;
      });
      setSelected([...selected, selectedPokemon]);
      setPokemons(newPokemons.sort((a, b) => a.id - b.id));
    }
  };

  const handleDelete = (id) => {
    const deselectedPokemon = selected.find((mon) => mon.id === id);
    const newSelected = selected.filter((mon) => mon.id !== id);
    setSelected(newSelected);
    setPokemons([...pokemons, deselectedPokemon].sort((a, b) => a.id - b.id));
  };

  return (
    <>
      <Dashboard
        pokemons={pokemons}
        selected={selected}
        handleDelete={handleDelete}
      />
      <PokemonList pokemons={pokemons} handleAdd={handleAdd} />
    </>
  );
};

export default Dex;
