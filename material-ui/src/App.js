import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";

function App() {
  return <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>;
}

export default App;
