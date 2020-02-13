import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import Demo from "./component/Demo";
import Demo2 from "./component/Demo2";
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

function App() {

  const [data, setData] = useState("");
  const { register, handleSubmit, setValue, errors } = useForm(); // initialise the hook

  useEffect(() => {
    register(
      { name: "state", type: "custom", value: stateTypes[0].type },
      { required: true }
    )
    register(
      { name: "category", type: "custom", value: categoryTypes[0].type },
      { required: true }
    )
  }, [])

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
        margin: "50px auto",
        width: "300px",
        textAlign: "center",
        }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{
        padding: 20,
        border: "1px solid tomato",
        display: "block"
      }}>
        {/* <input name="firstname" ref={register} />
        <br /><br />

        <input name="lastname" ref={register({required: true})} />
        {errors.lastname && 'Last name is required.'}

        <br /><br />

        <input name="age" ref={register({ pattern: /\d+/})} />
        {errors.age && 'Please enter number for age.'} */}

        <br /><br />

        <RadioGroup 
          defaultValue={stateTypes[0].type}
          onChange={e => {
            console.log(e.target.value)
            setValue("state", e.target.value)
          }} 
          row>
            {stateTypes.map((t, index) => (
              <FormControlLabel
                key={index}
                value={t.type}
                control={<Radio />}
                label={t.label}
              />
            ))}
        </RadioGroup>
        
        <RadioGroup 
          onChange={e => {
            console.log(e.target.value)
            setValue("category", e.target.value)
          }} 
          row>
            {categoryTypes.map((t, index) => (
              <FormControlLabel
                key={index}
                value={t.type}
                control={<Radio />}
                label={t.label}
              />
            ))}
        </RadioGroup>

        <input type="submit" />
      </form>

      <div style={{
        marginTop: 20,
      }}>
        output: 
        <br />
        {data}
      </div>

      <hr /><br />

      {/* 왜 defaultValue는 setState로 갱신이 안되는걸까? */}
      {/* <div>
        Demo 
      </div>
      <Demo data={{name: "leeduyoung"}}/>
      <Demo data={data2}/>

      <hr /><br />
      <div>
        Demo2
      </div>
      <Demo2 value={"leeduyoung"}/> */}

    </div>
  );
}

export default App;

const stateTypes = [
  { type: "OPEN", label: "판매중" },
  { type: "CLOSED", label: "판매중단" },
]

const categoryTypes = [
  { type: "EXPERIENCE", label: "액티비티" },
  { type: "CONTENT", label: "컨텐츠" },
]
