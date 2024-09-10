import React from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";
import { useState } from "react";
import { useEffect } from "react";

function Card() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const handleKeydown = (event) => {
        if (event.code === "Space") {
            setNumber(number + 1);
        }
    };

    window.addEventListener("keydown", handleKeydown)

    return () => {
        window.removeEventListener("keydown", handleKeydown)
    }
  }, [number])

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
