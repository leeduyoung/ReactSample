import React from "react";
import "./App.css";
import { debounce } from "lodash";

function App() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");

  const onChange = value => {
    console.log("called onChange");
    setText(value);
  };

  const onDebounceChange = debounce(value => {
    console.log("called onDebounceChange");
    setText2(value);
  }, 300);

  return (
    <div className="App">
      <div>
        <label>
          <span style={{ marginRight: 16 }}>텍스트1</span>
          <input
            type="text"
            value={text}
            onChange={event => onChange(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <span style={{ marginRight: 16 }}>텍스트2</span>
          <input
            type="text"
            value={text2}
            onChange={event => onDebounceChange(event.target.value)}
          />
        </label>
      </div>
      <div style={{ marginTop: 16 }}>console을 확인해주세요.</div>
    </div>
  );
}

export default App;
