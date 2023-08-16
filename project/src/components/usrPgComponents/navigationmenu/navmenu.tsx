import React from "react";
import './navmenu.css'
import MsearchBox from "../searchBox/mealsearchbox/msearchbox";
import UsrProfileBox from "./usrProfile/usrProfile";

const NavMenu:React.FC =()=>{
      return(
        <div className="mainheader">
            <h1>ukumbini</h1>
            <MsearchBox />
            <UsrProfileBox />
        </div>
      )
}
export default NavMenu;