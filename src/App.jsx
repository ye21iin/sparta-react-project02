import Router from "./shared/Router";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
}

export default App;
