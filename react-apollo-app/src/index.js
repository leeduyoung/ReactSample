import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import * as serviceWorker from "./serviceWorker";
import Apollo from "./contexts/apollo";
import Material from "./contexts/material-ui";

function App() {
  return (
    <Apollo>
      <Material>
        <Home />
      </Material>
    </Apollo>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
