import React from "react";
import NavMenu from "../navigationmenu/navmenu";
import MealPeriodNav from "../navigationmenu/mealPeriodnav/mealPeriodnav";
import Menu from "../menu/menu";
import Checkout from "../checkout/checkout";
import { mealPeriods } from "../../../dummyData/mealItemsobj";
import './usrPg.css'
import { useParams } from "react-router-dom";

const UserComponent:React.FC = ()=>{
    const { meal } = useParams<{ meal?: string }>();

    if (!meal || !mealPeriods.some(period => period.toLowerCase() === meal.toLowerCase())) {
        return (
            <div>
              <NavMenu />
              <div className="home-lg-container">
                <p>404 Error: Meal period not found</p>
              </div>
            </div>
          );
    }
    return(
        <div>
            <NavMenu />
            <div className="home-lg-container">
                <div className="items-container">
                <MealPeriodNav sMealPeriods={mealPeriods}/>
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