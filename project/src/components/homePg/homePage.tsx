import React from "react";
import NavMenu from "../navigationmenu/navmenu";
import './homePage.css'

const HomePageComponent:React.FC = ()=>{
    return(
        <div>
            <NavMenu />
            <div className="home-lg-container">
                <div className="items-container">
                <h1>order list</h1>
                </div>
                <div>
                    <h1> customer information</h1>
                </div>
            </div>
        </div>
    )

}
export default HomePageComponent;