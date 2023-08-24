import React from 'react';
import './menuItems.css';
import ItemCards from './itemCards/itermCards';

const MenuItems:React.FC = ()=>{
    const meals:string[]=['tea', 'coffee', 'masala', 'beans', 'basmati', 'kahawa']
      return(
        <div>
            <ItemCards items={meals}/>
        </div>
      )
}
export default MenuItems;