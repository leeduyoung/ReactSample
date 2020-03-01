import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Apollo from "./contexts/apollo";
import Material from "./contexts/material-ui";
import routes from "./routes";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Apollo>
      <Material>
        <Router>{renderRoutes(routes)}</Router>
      </Material>
    </Apollo>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
