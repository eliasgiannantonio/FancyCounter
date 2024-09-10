import React from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";
import { useState } from "react";

function Card() {
  const [number, setNumber] = useState(0);

  return (
    <div className="card">
      <Title />
      <Count number={number} />
      <ResetButton setNumber = {setNumber} number = {number}/>
      <CountButtons setNumber = {setNumber} number = {number}/>
    </div>
  );
}

export default Card;
