import React from "react";
import { Link, useLocation } from "react-router-dom";
import './mealperiodnav.css';

interface MealCurrentPeriods {
    sMealPeriods: string[];
}

const MealPeriodNav: React.FC<MealCurrentPeriods> = ({sMealPeriods}) => {
    const location = useLocation();

    return (
        <div className="navBarContainer">
        <nav className="navbar">
            {sMealPeriods.map((item)=>{
                const mealUrl = `/user/${item.toLowerCase()}`
                return(
                    <Link to={mealUrl} className={location.pathname===mealUrl?'active':''}>
                    {item}
                </Link>
                )
            })}
        </nav>
        </div>
    )
}
export default MealPeriodNav;