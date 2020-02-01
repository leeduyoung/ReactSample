import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Info from './components/Info';
import ContextSample from './components/ContextSample';
import ReducerCounter from './components/ReducerCounter';
import Average from './components/Average';
import UsePromiseSample from './components/UsePromiseSample';

const App = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => {setVisible(!visible)}}>
        {visible ? '숨기기' : '보이기'}
      </button>

      <hr/>

      <Counter />
      {visible && <Info />}

      <ContextSample />

      <ReducerCounter />

      <hr/>

      <Average />

      <hr/>

      {/* custom hooks */}
      <UsePromiseSample />

    </div>
  );
}

export default App;
