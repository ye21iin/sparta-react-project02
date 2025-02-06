import Router from "./shared/Router";
// import { PokemonProvider } from "./context/PokemonProvider";
import { Provider } from "react-redux";
import { store } from "./redux/config/configStore";

function App() {
  return (
    <Provider store={store}>
      {/* <PokemonProvider> */}
      <Router />
      {/* </PokemonProvider> */}
    </Provider>
  );
}

export default App;
