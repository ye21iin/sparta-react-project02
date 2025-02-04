import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashContainer = styled.div`
  background-color: rgb(248, 248, 248);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  transition: transform 0.2s, box-shadow 0.2s;
`;

const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

const Card = styled.div`
  width: 100px;
  height: 100px;

  padding: 20px;
  background-color: white;
  border: 2px dashed black;
  border-radius: 5px;
`;

const Dashboard = ({ pokemons, selected, handleDelete }) => {
  return (
    <DashContainer>
      <h2>나만의 포켓몬</h2>
      <CardContainer>
        {selected.map((id) => {
          const mon = pokemons.find((mon) => mon.id === id);
          if (!mon) return null;
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
