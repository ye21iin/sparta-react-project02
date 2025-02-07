import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleDelete } from "../redux/slice";
import {
  DetailContainer,
  Img,
  NameTag,
  Btn,
  BackBtn,
  BtnContainer,
} from "../style";

const PokemonDetail = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const id = parseInt(queryParams.get("id"), 10);

  const { pokemons, selected } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSelectedHasMon = selected.find((mon) => mon.id === id);
  const isPokemonsHasMon = pokemons.find((mon) => mon.id === id);
  const { img_url, korean_name, types, description, isSelected } =
    isSelectedHasMon ? isSelectedHasMon : isPokemonsHasMon;

  const handleAddOnClick = () => {
    dispatch(handleAdd(id));
    navigate(-1);
  };
  const handleDeleteOnClick = () => {
    dispatch(handleDelete(id));
    navigate(-1);
  };

  return (
    <DetailContainer>
      <Img src={img_url} alt="Pokemon" />
      <NameTag>
        <h4>{korean_name}</h4>
        <p>{types.join(" / ")}</p>
        <p>{description}</p>
      </NameTag>
      <BtnContainer>
        <Btn onClick={isSelected ? handleDeleteOnClick : handleAddOnClick}>
          {isSelected ? "삭제" : "추가"}
        </Btn>
        <BackBtn onClick={() => navigate(-1)}>뒤로 가기</BackBtn>
      </BtnContainer>
    </DetailContainer>
  );
};

export default PokemonDetail;
