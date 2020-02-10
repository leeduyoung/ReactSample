import React from "react";
import "./App.css";
import TextEditor from "./components/TextEditor";
import RichTextExample from "./components/RichTextExample";

function App() {
    return (
        <div className="App">
            <div className="text-area-container" 
                style={{ border: "2px solid tomato" }}>
                <TextEditor />
            </div>
            <br />
            <div className="text-area-container" 
                style={{ border: "2px solid grey", margin: "20px 120px" }}>
                <RichTextExample />
            </div>
        </div>
    );
}

export default App;
