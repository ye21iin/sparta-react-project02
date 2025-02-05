import React from "react";
import { CardListContainer, Img, NameTag, Btn } from "../style";
import { useNavigate } from "react-router-dom";

const PokemonCard = (props) => {
  const { IMG_SRC, name, id, isSelected, handleAdd, handleDelete } = props;
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <CardListContainer onClick={handleOnClick}>
      <Img src={IMG_SRC} alt="Pokemon"></Img>
      <NameTag>
        <h4>{name}</h4>
        <p>No. {id}</p>
      </NameTag>
      {!isSelected ? (
        <Btn
          onClick={(e) => {
            e.stopPropagation();
            handleAdd();
          }}
        >
          추가
        </Btn>
      ) : (
        <Btn
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          삭제
        </Btn>
      )}
    </CardListContainer>
  );
};

export default PokemonCard;
