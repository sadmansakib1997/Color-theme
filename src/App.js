import "./App.css";
import { useState } from "react";
import Callback from "./Callback";

function App() {
  const [color, setcolor] = useState(null);
  const getcolor = (coolor) => {
    setcolor(coolor);
  };

  return (
    <div className="App">
      <div className="color" style={{ background: `${color}` }}></div>
      <Callback getcolor={getcolor}></Callback>
    </div>
  );
}

export default App;
