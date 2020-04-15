import React from "react";
import { useInput } from "../hook/useInput";

/* ------------------------------------------------------------
 *    useInput
 * ------------------------------------------------------------ */
const InputComponent = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("", maxLen);

  return (
    <div>
      <h3>1. useInput</h3>
      <input placeholder="name" {...name} />
    </div>
  );
};

export default InputComponent;
