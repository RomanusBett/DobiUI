import React, { useState, useEffect } from 'react';
import './menuItems.css';
import ItemCards from './itemCards/itermCards';
import { useLocation } from 'react-router-dom';
import { mealItems } from '../../../../dummyData/mealItemsobj';
import { Item } from '../../../../interfaces/meal-items';

const MenuItems:React.FC = ()=>{
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const mealPeriodParam = pathSegments[pathSegments.length -1];
    const mealData =  mealItems.map((o)=>({...o, amount: 1}))

    useEffect(()=>{
      if(mealPeriodParam){
        const filtered = mealData.filter((item)=>item.mealPeriod.toLowerCase() === mealPeriodParam)
        setFilteredItems(filtered);
      } else {
        setFilteredItems(mealData);
      }
    },[]);

      return(
        <div className='mainItemcardsContainer'>
            <ItemCards items={filteredItems}/>
        </div>
      )
}
export default MenuItems;