import React from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const postData = {
    title: "이태원클라쓰",
    subTitle: "끄떡없지!",
    Contents: [
      { id: 1, description: "test" },
      { id: 2, description: "test2" },
      { id: 3, description: "test3" },
    ],
  };

  const onSubmit = inputData => {
    console.log("origin post data: ", postData);
    console.log("new post data: ", inputData);
  };

  return (
    <div className="App">
      <Post createMode={false} postData={postData} onSubmit={onSubmit} />
      <hr />
      <Post createMode={true} postData={null} onSubmit={onSubmit} />
      <hr />
      <div className="bottom">아래영역</div>
    </div>
  );
}

export default App;
