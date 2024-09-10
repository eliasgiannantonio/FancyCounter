import React from "react";
import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ setNumber, number }) {
  const handleReset = () => {
    setNumber(number = 0);
  };

  return <button className="reset-btn" onClick={handleReset}><ResetIcon className="reset-btn-icon"/></button>;
}

export default ResetButton;
