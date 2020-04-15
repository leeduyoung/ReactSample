import React from "react";

const UseTitle = (initialTitle) => {
  const [title, setTitle] = React.useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  React.useEffect(updateTitle, [title]);

  return setTitle;
};

export default UseTitle;
