import Router from "./shared/Router";
import { Provider } from "react-redux";
import { store } from "./redux/config/configStore";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer />
    </Provider>
  );
}

export default App;
