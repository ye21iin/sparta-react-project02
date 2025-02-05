import React from "react";
import { CardListContainer, Img, NameTag, Btn } from "../style";

const PokemonCard = (props) => {
  const { IMG_SRC, name, id, isSelected, handleAdd, handleDelete } = props;

  const showDetailOnClick = () => {};

  return (
    <CardListContainer onClick={showDetailOnClick}>
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
    </CardListContainer>
  );
};

export default PokemonCard;
