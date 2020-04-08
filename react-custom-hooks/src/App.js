import React from 'react';
import './App.css';
import { useInput } from './hook/useInput';

function App() {
  const maxLen = (value) => value.length < 10
  const name = useInput("", maxLen)

  return (
    <div className="App">
      <h1>
        Hello
      </h1>

      <div>
        <h3>1. useInput</h3>
        <input placeholder="name" {...name} />
      </div>
    </div>
  );
}

export default App;
