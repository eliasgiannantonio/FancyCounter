import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButtons({setNumber, number}) {

    const handleSuma = (event) => {
        setNumber(number + 1);
        event.currentTarget.blur();
    }

    const handleResta = (event) => {
        setNumber(number - 1);
        event.currentTarget.blur();
    }

  return (
    <div className="button-container">
      <button className="count-btn" onClick={handleResta}><MinusIcon className="count-btn-icon"/></button>
      <button className="count-btn" onClick={handleSuma}><PlusIcon className="count-btn-icon"/></button>
    </div>
  );
}

export default CountButtons;
