import React, { useEffect, useState } from "react";
import MOCK_DATA from "../data/mockData";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

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
      setSelected([...selected, id]);
    }
  };

  const handleDelete = (id) => {
    setSelected(selected.filter((selectedId) => selectedId !== id));
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
