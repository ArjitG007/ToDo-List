import React, { useState } from "react";
import "./style.css";
import Menu from "./RestaurantAPI";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Code = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  // Filter Function for displaying the content according to Key
  const filteritem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedlist);
  };

  return (
    <div>
      {/* Here in {} we are using props for passing content from parent to child */}

      <Navbar filteritem={filteritem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </div>
  );
};

export default Code;
