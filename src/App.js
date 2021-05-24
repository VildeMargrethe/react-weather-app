import Weather from "./Weather";
import Signature from "./Signature";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <Signature />
      </div>
    </div>
  );
}
