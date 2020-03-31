import React from "react";
import "./App.css";
import { debounce } from "lodash";

const somthingFunc = () => {
  console.log("called somthingFunc");
};

const debounceSomethingFunc = debounce(() => {
  console.log("called debounceSomethingFunc");
}, 200);

function App() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");

  const onChange = event => {
    const value = event.target.value;

    setText(value);
    somthingFunc();
  };

  const onDebounceChange = event => {
    const value = event.target.value;

    setText2(value);
    debounceSomethingFunc();
  };

  return (
    <div className="App">
      <div>
        <label>
          <span style={{ marginRight: 16 }}>텍스트1</span>
          <input type="text" value={text} onChange={onChange} />
        </label>
      </div>
      <div>
        <label>
          <span style={{ marginRight: 16 }}>텍스트2</span>
          <input type="text" value={text2} onChange={onDebounceChange} />
        </label>
      </div>
      <div style={{ marginTop: 16 }}>console을 확인해주세요.</div>
    </div>
  );
}

export default App;
