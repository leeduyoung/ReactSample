import React, { useState } from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {

  const [data, setData] = useState("");
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
    setData(JSON.stringify(data));
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
    </div>
  );
}

export default App;
