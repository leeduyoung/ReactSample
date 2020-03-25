import React from "react";
import "./App.css";
import CSVReader from "react-csv-reader";

const handleForce = (data, fileInfo) => {
  console.log("data: ", data);
  console.log("fileInfo: ", fileInfo);
};

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

function App() {
  return (
    <div className="App">
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      <p>and then open the console</p>
    </div>
  );
}

export default App;
