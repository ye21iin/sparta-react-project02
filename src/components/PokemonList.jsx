import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { ListContainer } from "../style";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
  const { pokemons, handleAdd } = useContext(PokemonContext);
  return (
    <ListContainer>
      {pokemons.map((mon) => {
        const props = {
          IMG_SRC: mon.img_url,
          name: mon.korean_name,
          id: mon.id,
          isSelected: false,
          handleAdd: () => handleAdd(mon.id),
        };
        return <PokemonCard key={mon.id} {...props}></PokemonCard>;
      })}
    </ListContainer>
  );
};

export default PokemonList;
