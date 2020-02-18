import React from 'react';
import './App.css';
import SimpleTable from './components/SimpleTable';
import SimpleTableRowspan from './components/SimpleTableRowspan';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">

      <div style={{width: 850}}>
        <h2>SIMPLE TABLE</h2>
        <CssBaseline />
        <SimpleTable />
      </div>

      <div style={{width: 850}}>
        <h2>SIMPLE TABLE2</h2>
        <SimpleTableRowspan />
      </div>
    </div>
  );
}

export default App;
