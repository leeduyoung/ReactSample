import React, { useState } from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import Demo from "./component/Demo";
import Demo2 from "./component/Demo2";

function App() {

  const [data, setData] = useState("");
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
    setData(JSON.stringify(data));
  };
  
  let data2 = {
      name: "mango"
  };

  return (
    <div className="App" 
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 150,
        }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{
        padding: 20,
        border: "1px solid tomato",
        display: "block"
      }}>
        <input name="firstname" ref={register} />
        <br /><br />

        <input name="lastname" ref={register({required: true})} />
        {errors.lastname && 'Last name is required.'}

        <br /><br />

        <input name="age" ref={register({ pattern: /\d+/})} />
        {errors.age && 'Please enter number for age.'}

        <br /><br />

        <input type="submit" />
      </form>

      <div style={{
        width: 300,
        height: 300,
        marginTop: 20,
        border: "1px solid tomato"
      }}>
        {data}
      </div>

      <hr /><br />

      {/* 왜 defaultValue는 setState로 갱신이 안되는걸까? */}
      <div>
        Demo 
      </div>
      <Demo data={{name: "leeduyoung"}}/>
      <Demo data={data2}/>

      <hr /><br />
      <div>
        Demo2
      </div>
      <Demo2 value={"leeduyoung"}/>

    </div>
  );
}

export default App;
