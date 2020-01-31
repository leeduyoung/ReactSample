import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Info from './components/Info';

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
    </div>
  );
}

export default App;
