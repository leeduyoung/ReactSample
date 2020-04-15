import React from "react";
import "./App.css";
import { useInput } from "./hook/useInput";
import UseTabs from "./hook/useTabs";

function App() {
  const maxLen = (value) => value.length < 10;
  const name = useInput("", maxLen);
  const { currentItem, onChangeItem } = UseTabs(0, content);

  return (
    <div className="App">
      <h1>Hello</h1>

      <div>
        <h3>1. useInput</h3>
        <input placeholder="name" {...name} />
      </div>

      <div>
        <h3>2. useTabs</h3>
        {content.map((item, index) => (
          <button onClick={() => onChangeItem(index)}>{item.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}

export default App;

const content = [
  {
    tab: "Section 1",
    content: "Section one content",
  },
  {
    tab: "Section 2",
    content: "Section two content",
  },
];
