import React from 'react';
import './namebox.css';

const NameBox:React.FC=()=>{
    return(
        <div className='name-sec-container'>
            <div className='logo-container'>
                <img className='logo-img' src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png" alt="" />
            </div>
            <div>
                <h3>Nourvo</h3>
            </div>
        </div>
    )
}
export default NameBox;