import React from "react";
import { useParams } from "react-router-dom";
import { DetailContainer, Img, NameTag, Btn } from "../style";

const PokemonDetail = () => {
  //   const param = useParams();

  return (
    <DetailContainer>
      <Img src="link" alt="Pokemon" />
      <NameTag>
        <h4>name</h4>
        <p>type</p>
        <p>contents</p>
      </NameTag>
      <Btn>뒤로 가기</Btn>
    </DetailContainer>
  );
};

export default PokemonDetail;
