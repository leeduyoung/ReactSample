import React from "react";
import "./App.css";
import { CssBaseline, Button } from "@material-ui/core";
import SimpleTable from "./components/SimpleTable";
import SimpleTable2 from "./components/SimpleTable2";
import SimpleTable3 from "./components/SimpleTable3";
import SimpleTable4 from "./components/SimpleTable4";
import CustomTransferList from "./components/transfer-list/CustomTransferList";
import TransferList from "./components/transfer-list/TransferList";
import TestModal from "./components/layout/TestModal";

function App() {
  const [testModal, setTestModal] = React.useState(true)

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

      <div style={{ width: 850, border: "1px solid gray" }}>
        <CustomTransferList />
      </div>

      <TransferList />

      <br />

      <Button variant="contained" onClick={() => setTestModal(true)}>
        OPEN TEST MODAL
      </Button>
      <TestModal 
        open={testModal}
        onClose={() => setTestModal(false)}
      />
    </div>
  );
}

export default App;
