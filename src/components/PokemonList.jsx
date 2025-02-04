import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

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
