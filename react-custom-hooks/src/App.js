import React from "react";
import "./App.css";
import InputComponent from "./components/inputComponent";
import TabsComponent from "./components/tabsComponent";
import SetTitleComponent from "./components/setTitleComponent";
import ClickComponent from "./components/clickComponent";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <InputComponent />
      <TabsComponent />
      <SetTitleComponent />
      <ClickComponent />
    </div>
  );
}

export default App;
