import React from "react";
import "./App.css";
import TextEditor from "./components/TextEditor";

function App() {
    return (
        <div className="App">
            <div className="text-area-container" 
                style={{ border: "2px solid tomato" }}>
                <TextEditor />
            </div>
        </div>
    );
}

export default App;
