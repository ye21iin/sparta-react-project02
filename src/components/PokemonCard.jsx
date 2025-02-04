import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const NameTag = styled.div`
  h4 {
  }
  p {
  }
`;

const Btn = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;

  border: 3px solid red;
  border-radius: 5px;
  background-color: red;
  color: #f4f4f4;

  &:hover {
    background-color: darkred;
    border-color: darkred;
    color: #e0e0e0;
  }
`;

const PokemonCard = (props) => {
  const { IMG_SRC, name, id, isSelected, handleAdd, handleDelete } = props;
  return (
    <CardContainer>
      <Img src={IMG_SRC} alt="Pokemon"></Img>
      <NameTag>
        <h4>{name}</h4>
        <p>No. {id}</p>
      </NameTag>
      {!isSelected ? (
        <Btn onClick={handleAdd}>추가</Btn>
      ) : (
        <Btn onClick={handleDelete}>삭제</Btn>
      )}
    </CardContainer>
  );
};

export default PokemonCard;
