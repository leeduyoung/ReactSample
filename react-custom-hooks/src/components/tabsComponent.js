import React from "react";
import UseTabs from "../hook/useTabs";

/* ------------------------------------------------------------
 *    useTabs
 * ------------------------------------------------------------ */
const TabsComponent = () => {
  const { currentItem, onChangeItem } = UseTabs(0, content);

  return (
    <div>
      <h3>2. useTabs</h3>
      {content.map((item, index) => (
        <button key={index} onClick={() => onChangeItem(index)}>
          {item.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default TabsComponent;

const content = [
  {
    tab: "Section 1",
    content: "Section one content",
  },
  {
    tab: "Section 2",
    content: "Section two content",
  },
];
