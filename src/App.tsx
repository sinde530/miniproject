import Greetings from "./components/Greetings";

import "./App.css";
import CounterContainer from "./containers/CounterContainer";

export default function App() {
  return (
    <div className="App">
      <CounterContainer />
      <Greetings name="Crong" mark="!" />
    </div>
  );
}
