import React from "react";
import './orderdetails.css';

const OrderDetails:React.FC =()=>{
    const mealsOrdered:string[] = ['tea', 'coffee', 'apple']
    return(
        <div>
           {mealsOrdered.map((item:string)=>{
            return(
                <li key={item}>{item}</li>
            )
           })}
        </div>
    )
}

export default OrderDetails;