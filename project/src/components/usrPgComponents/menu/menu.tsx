import React from 'react';
import './menu.css';
import MenuItems from './menuItems/menuItems';

const Menu: React.FC = () => {
    return (
        <div className='mainMenuContainer'>
            <div className='mealItemBox'>
                <h3>Menu</h3>
            </div>
            <MenuItems />
        </div>
    )
}
export default Menu;
