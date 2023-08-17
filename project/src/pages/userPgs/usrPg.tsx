import React from "react";
import NavMenu from "../../components/usrPgComponents/navigationmenu/navmenu";
import MealPeriodNav from "../../components/usrPgComponents/navigationmenu/mealPeriodnav/mealPeriodnav";
import Menu from "../../components/usrPgComponents/menu/menu";
import Checkout from "../../components/usrPgComponents/checkout/checkout";
import './usrPg.css'

const UserComponent:React.FC = ()=>{
    return(
        <div>
            <NavMenu />
            <div className="home-lg-container">
                <div className="items-container">
                <MealPeriodNav />
                <Menu />
                </div>
                <div className="checkout-container">
                <Checkout />
                </div>
            </div>
        </div>
    )
}
export default UserComponent;