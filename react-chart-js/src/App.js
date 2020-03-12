import React from "react";
import "./App.css";
import DoughnutComponent from "./components/DoughnutComponent";
import LineComponent from "./components/LineComponent";
import ScatterComponent from "./components/ScatterComponent";
import BubbleComponent from "./components/BubbleComponent";

function App() {
  return (
    <div className="App">
      <div style={{ width: 800, height: 400 }}>
        <DoughnutComponent />
      </div>
      <div style={{ width: 800, height: 400 }}>
        <LineComponent />
      </div>
      <div style={{ width: 800, height: 400 }}>
        <ScatterComponent />
      </div>
      <div style={{ width: 800, height: 400 }}>
        <BubbleComponent />
      </div>
    </div>
  );
}

export default App;
