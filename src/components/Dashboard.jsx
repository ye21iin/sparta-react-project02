import PokemonCard from "./PokemonCard";
import {
  DashContainer,
  CardContainer,
  Title,
  PokeBallImg,
  PokeBall,
} from "../style.jsx";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selected = useSelector((state) => state.pokemon.selected);
  const MAX_NUM = 6;

  // selected 포켓몬 배열
  const pokemonCards = selected.length
    ? selected.map((mon) => <PokemonCard key={mon.id} {...mon} />) // 선택된 PokemonCard 렌더링
    : []; // 선택된 포켓몬이 없으면 빈 배열 반환

  // 빈 포켓볼 이미지 배열
  const emptyBalls = [...Array(MAX_NUM - selected.length)].map((_, i) => (
    <PokeBall key={`ball-${i + selected.length}`}>
      <PokeBallImg src="/pokeBall.png" alt="PokeBall" />
    </PokeBall>
  ));

  return (
    <DashContainer>
      <Title>나만의 포켓몬</Title>
      <CardContainer>{[...pokemonCards, ...emptyBalls]}</CardContainer>
    </DashContainer>
  );
};

export default Dashboard;
