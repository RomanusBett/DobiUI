import React from "react";
import './navmenu.css'
import MsearchBox from "../searchBox/mealsearchbox/msearchbox";
import UsrProfileBox from "./usrProfile/usrProfile";
import NameBox from "./nameBox/namebox";

const NavMenu: React.FC = () => {
  return (
    <div className="mainheader">
      <div className="mainHeaderBox">
        <NameBox />
        <MsearchBox />
        <UsrProfileBox />
      </div>
    </div>
  )
}
export default NavMenu;