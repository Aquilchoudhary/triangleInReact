import React, { useState } from "react";
import "./styles.css";
const title = "Triangle";
const subTitle = "Check if Triangle ??? ";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [output, setOutput] = useState("Please enter the values !!!");

  function inputOne(event) {
    setA(event.target.value);
  }
  function inputTwo(event) {
    setB(event.target.value);
  }
  function inputThree(event) {
    setC(event.target.value);
  }
  function checkTriangle() {
    if (Number(a) + Number(b) + Number(c) === 180) {
      setOutput("It is a triangle!!!");
    } else {
      setOutput("It is not a Triangle!!!");
    }
  }
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <label>Angle 1 </label>
      <input type="number" onChange={inputOne} value={a}></input>
      <label>Angle 2 </label>
      <input type="number" onChange={inputTwo} value={b}></input>
      <label>Angle 3 </label>
      <input type="number" onChange={inputThree} value={c}></input>
      <button onClick={checkTriangle}>Check</button>
      <h2>{output}</h2>
    </div>
  );
}
