import PokemonCard from "./PokemonCard";
import { ListContainer } from "../style";
import { useSelector } from "react-redux";

const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokemon.pokemons);

  return (
    <ListContainer>
      {pokemons.map((mon) => {
        return <PokemonCard key={mon.id} {...mon}></PokemonCard>;
      })}
    </ListContainer>
  );
};

export default PokemonList;
