import { useState } from "react";
import { PokemonContext } from "./PokemonContext";

// Provider
export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState([]);

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
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        selected,
        setSelected,
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
