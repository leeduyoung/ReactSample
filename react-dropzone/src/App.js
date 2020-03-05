import React from "react";
import "./App.css";
import FileDropzone from "./components/FileDropzone";
import Previews from "./components/Preview";

function App() {
  return (
    <div className="app-container">
      <FileDropzone />

      <Previews />
    </div>
  );
}

export default App;
