import React from "react";
import PokemonCard from "./PokemonCard";
import { ListContainer } from "../style";

const PokemonList = ({ pokemons, handleAdd }) => {
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
