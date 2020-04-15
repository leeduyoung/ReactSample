import React from "react";
import UseClick from "../hook/useClick";

const ClickComponent = () => {
  const func = () => console.log("Say Hello!");
  const useClickRef = UseClick(func);

  return (
    <div>
      <h3>4. useClick</h3>
      <div ref={useClickRef}>CustomButton</div>
    </div>
  );
};

export default ClickComponent;
