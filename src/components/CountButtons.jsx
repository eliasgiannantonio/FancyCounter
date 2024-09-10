import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButtons({setNumber, number}) {

    const handleSuma = () => {
        setNumber(number + 1);
    }

    const handleResta = () => {
        setNumber(number - 1);
    }

  return (
    <div className="button-container">
      <button className="count-btn" onClick={handleResta}><MinusIcon className="count-btn-icon"/></button>
      <button className="count-btn" onClick={handleSuma}><PlusIcon className="count-btn-icon"/></button>
    </div>
  );
}

export default CountButtons;
