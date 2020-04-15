import React from "react";
import UseTitle from "../hook/useTitle";

/* ------------------------------------------------------------
 *    useTitle
 * ------------------------------------------------------------ */
const SetTitleComponent = () => {
  const titleUpdater = UseTitle("Loading...");

  setTimeout(() => {
    titleUpdater("SayHello!");
  }, 5000);

  return (
    <div>
      <h3>3. useTitle</h3>
      <p>html title 확인!</p>
    </div>
  );
};
export default SetTitleComponent;
