import React from 'react'
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";

function Card() {
  return (
    <div>
        <Title />
        <Count />
        <ResetButton />
        <CountButtons />
      </div>
  )
}

export default Card