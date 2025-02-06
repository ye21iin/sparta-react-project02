import PokemonCard from "./PokemonCard";
import { DashContainer, CardContainer, Title } from "../style.jsx";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selected = useSelector((state) => state.pokemon.selected);

  return (
    <DashContainer>
      <Title>나만의 포켓몬</Title>
      <CardContainer>
        {selected.length === 0 ? (
          <p> 🎁 마음에 드는 포켓몬을 잡아보세요! 🎁 </p>
        ) : (
          selected.map((mon) => {
            return <PokemonCard key={mon.id} {...mon}></PokemonCard>;
          })
        )}
      </CardContainer>
    </DashContainer>
  );
};

export default Dashboard;
