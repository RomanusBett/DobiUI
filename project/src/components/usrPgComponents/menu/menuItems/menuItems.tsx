import React from 'react';
import './menuItems.css';
import ItemCards from './itemCards/itermCards';
import { mealItems } from '../../userPgs/mealItemsobj';

const MenuItems:React.FC = ()=>{
    const meals:string[]=['tea', 'coffee', 'masala', 'beans', 'basmati', 'kahawa']
      return(
        <div className='mainItemcardsContainer'>
            <ItemCards items={meals}/>
        </div>
      )
}
export default MenuItems;