import React from "react";
import './mealperiodnav.css';

const MealPeriodNav: React.FC = () => {
    return (
        <div className="bigMealNavContainer">
            <div className="meal-period-nav">
                <li>breakfast</li>
                <li>teaBreak</li>
                <li>lunch</li>
            </div>
        </div>
    )
}
export default MealPeriodNav;