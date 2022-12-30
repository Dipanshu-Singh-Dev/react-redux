import "./App.css";
import Counter from "./Counter/Counter";
import countStore from "./Store/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={countStore}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
