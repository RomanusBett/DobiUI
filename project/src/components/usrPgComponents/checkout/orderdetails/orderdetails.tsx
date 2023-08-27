import React from "react";
import './orderdetails.css';

const OrderDetails:React.FC =()=>{
    const mealsOrdered:string[] = ['tea', 'coffee', 'apple']
    return(
        <div className="orderDetailsContainer">
            <div className="orderdescHeaderBox">
            <p>Order details</p>
            </div>
           {mealsOrdered.map((item:string)=>{
            return(
                <div className="orderDetailsBigContainer">
                    <div className="orderdetImagebox">
                    <img className='orderMealImage' src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' alt='order-fdimg'/>
                    </div>
                    <div className="orderDetBox">
                        <div className="orderDescBox">
                        <li key={item}>{item}</li>
                        </div>
                        <div className="orderAmtBigContainer">
                            <div className="orderVarBox">
                              <button className="decButton">-</button>
                              <p>3</p>
                              <button className="incButton">+</button>
                            </div>
                            <div className="priceBox">
                               <p>ksh103</p>
                            </div>
                        </div>
                    </div>
                </div>

            )
           })}
        </div>
    )
}

export default OrderDetails;