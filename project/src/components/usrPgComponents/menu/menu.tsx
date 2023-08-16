import React from 'react';
import './menu.css';
import MenuItems from './menuItems/menuItems';

const Menu:React.FC =()=>{
      return(
        <div>
            <h3>Menu</h3>
            <MenuItems />
        </div>
      )
}
export default Menu;
