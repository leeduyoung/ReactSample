import React from "react";

/**
 * 1. input으로 initialTab과 allTabs 정보를 받는다.
 * 2. output으로 currentItem과 changeItem을 리턴한다.
 */
const UseTabs = (initialTab, allTabs) => {
  const [currentItem, setCurrentItem] = React.useState(initialTab);

  const onChangeItem = (index) => {
    setCurrentItem(index);
  };

  return {
    currentItem: allTabs[currentItem],
    onChangeItem,
  };
};
export default UseTabs;
