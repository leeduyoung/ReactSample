import React from "react";
import "./App.css";
import Post from "./components/Post";
import Coupon from "./components/Coupon";
import { Button } from "@material-ui/core";
import { ThemeContext } from "./context/ThemeContext";
import Snackbar from "./components/Snackbar";
import { useSnackbar } from "notistack";

function App() {
  const value = React.useContext(ThemeContext)
  const { enqueueSnackbar } = useSnackbar();

  const postData = {
    title: "이태원클라쓰",
    subTitle: "끄떡없지!",
    contents: [
      { id: 1, description: "test" },
      { id: 2, description: "test2" },
      { id: 3, description: "test3" }
    ]
  };
  const couponData = {
    title: "5% 할인 쿠폰",
    subTitle: "할인 쿠폰",
    contents: [
      { id: 1, description: "test" },
      { id: 2, description: "test2" },
      { id: 3, description: "test3" }
    ]
  };

  const onSubmit = inputData => {
    console.log("origin post data: ", postData);
    console.log("new post data: ", inputData);
  };

  const onClick = () => {
    enqueueSnackbar('This is a success message!', { variant: "success" });
  };  

  return (
    <div className="App">
      <Post createMode={false} postData={postData} onSubmit={onSubmit} />
      <hr />
      <Post createMode={true} postData={null} onSubmit={onSubmit} />
      <hr />
      <div className="bottom">
        <Coupon createMode={true} />
        <hr />
        <Coupon createMode={false} couponData={couponData} />
      </div>

      <Button variant="contained" color={"primary"}>테스트 버튼</Button>
      <Button variant="contained" color={"secondary"}>테스트 버튼</Button>
      <Button variant="contained" color={value}>테스트 버튼</Button>

      <br /><br /><br />

      <Snackbar />

      <br /><br /><br />

      <Button 
        color="primary"
        variant="contained"
        onClick={onClick}
      >
        Success Message
      </Button>      
    </div>
  );
}

export default App;
