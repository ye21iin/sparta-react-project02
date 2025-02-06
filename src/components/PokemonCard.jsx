import { useDispatch } from "react-redux";
import { CardListContainer, Img, NameTag, Btn } from "../style";
import { useNavigate } from "react-router-dom";
import { handleAdd, handleDelete } from "../redux/slice";

const PokemonCard = (props) => {
  const { img_url: IMG_SRC, korean_name: name, id, isSelected } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    navigate(`/detail?id=${id}`);
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
            dispatch(handleAdd(id));
          }}
        >
          추가
        </Btn>
      ) : (
        <Btn
          onClick={(e) => {
            e.stopPropagation();
            dispatch(handleDelete(id));
          }}
        >
          삭제
        </Btn>
      )}
    </CardListContainer>
  );
};

export default PokemonCard;
