import React from "react";
import { Link, useLocation } from "react-router-dom";
import './mealperiodnav.css';
import { MealCurrentPeriods } from "../../../../interfaces/meal-items";

const MealPeriodNav: React.FC<MealCurrentPeriods> = ({sMealPeriods}) => {
    const location = useLocation();

    return (
        <div className="navBarContainer">
        <nav className="navbar">
            {sMealPeriods.map((item)=>{
                const mealUrl = `/user/${item.toLowerCase()}`
                return(
                    <Link key={item} to={mealUrl} className={location.pathname===mealUrl?'active':''}>
                    {item}
                </Link>
                )
            })}
        </nav>
        </div>
    )
}
export default MealPeriodNav;