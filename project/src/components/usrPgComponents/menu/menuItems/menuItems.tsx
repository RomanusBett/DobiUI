import './menuItems.css';
import React from 'react';

const MenuItems:React.FC = ()=>{
    const meals:string[]=['tea', 'coffee', 'masala']
      return(
        <div>
            {meals.map((item:string)=>{
                return(
                    <li key={item}>{item}</li>
                )
            })}
        </div>
      )
}
export default MenuItems;