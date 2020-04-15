import React from "react";

const UseClick = (onClick) => {
  const element = React.useRef();

  React.useEffect(() => {
    const current = element.current;

    if (current) {
      current.addEventListener("click", onClick);
    }

    return () => {
      if (current) {
        current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return element;
};

export default UseClick;
