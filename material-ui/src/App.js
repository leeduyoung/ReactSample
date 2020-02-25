import React from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import SimpleTable from "./components/SimpleTable";
import SimpleTable2 from "./components/SimpleTable2";
import SimpleTable3 from "./components/SimpleTable3";
import SimpleTable4 from "./components/SimpleTable4";

function App() {
  return (
    <div className="App">
      <div style={{ width: 850 }}>
        <h2>SIMPLE TABLE</h2>
        <CssBaseline />
        <SimpleTable />
      </div>

      <div style={{ width: 850, marginTop: 40 }}>
        <h2>SIMPLE TABLE2</h2>
        <SimpleTable2 />
      </div>

      <div style={{ width: 850, marginTop: 40 }}>
        <h2>SIMPLE TABLE3</h2>
        <SimpleTable3 />
      </div>

      <div style={{ width: 850, marginTop: 40 }}>
        <h2>SIMPLE TABLE4</h2>
        <SimpleTable4 />
      </div>
    </div>
  );
}

export default App;
