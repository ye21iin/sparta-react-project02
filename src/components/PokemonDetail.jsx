import { useLocation, useNavigate } from "react-router-dom";
import {
  DetailContainer,
  Img,
  NameTag,
  Btn,
  BackBtn,
  BtnContainer,
} from "../style";
import MOCK_DATA from "../data/mockData";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(useLocation().search);
  const id = parseInt(queryParams.get("id"), 10);

  const dataset = MOCK_DATA;
  const variable = dataset.find((data) => data.id === id);
  const { img_url, korean_name, types, description } = variable;

  return (
    <DetailContainer>
      <Img src={img_url} alt="Pokemon" />
      <NameTag>
        <h4>{korean_name}</h4>
        <p>{types.join(" / ")}</p>
        <p>{description}</p>
      </NameTag>
      <BtnContainer>
        <Btn>추가</Btn>
        <BackBtn onClick={() => navigate(-1)}>뒤로 가기</BackBtn>
      </BtnContainer>
    </DetailContainer>
  );
};

export default PokemonDetail;
