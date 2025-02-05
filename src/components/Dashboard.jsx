import React from "react";
import PokemonCard from "./PokemonCard";
import { DashContainer, CardContainer, Title } from "../style.jsx";

const Dashboard = ({ pokemons, selected, handleDelete }) => {
  return (
    <DashContainer>
      <Title>나만의 포켓몬</Title>
      <CardContainer>
        {selected.map((mon) => {
          const props = {
            IMG_SRC: mon.img_url,
            name: mon.korean_name,
            id: mon.id,
            isSelected: true,
            handleDelete: () => handleDelete(mon.id),
          };
          return <PokemonCard key={mon.id} {...props}></PokemonCard>;
        })}
      </CardContainer>
    </DashContainer>
  );
};

export default Dashboard;
