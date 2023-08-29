import React from "react";
import OrderDetailsCss from './orderdetails.module.css'
import AlterButton from "../../alterButton/alterButton";

const OrderDetails:React.FC =()=>{
    const mealsOrdered:string[] = ['tea', 'coffee', 'apple']
    return(
        <div className={OrderDetailsCss.orderDetailsContainer}>
            <div className={OrderDetailsCss.orderdescHeaderBox}>
            <p>Order details</p>
            </div>
           {mealsOrdered.map((item:string)=>{
            return(
                <div className={OrderDetailsCss.orderDetailsBigContainer}>
                    <div className={OrderDetailsCss.orderdetImagebox}>
                    <img className={OrderDetailsCss.orderMealImage} src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' alt='order-fdimg'/>
                    </div>
                    <div className={OrderDetailsCss.orderDetBox}>
                        <div className={OrderDetailsCss.orderDescBox}>
                        <li key={item}>{item}</li>
                        </div>
                        <div className={OrderDetailsCss.orderAmtBigContainer}>
                            <div className={OrderDetailsCss.orderVarBox}>
                              <AlterButton children='-' className={`${OrderDetailsCss.decButton} ${OrderDetailsCss.minusBtn}`} />
                              <p>3</p>
                              <AlterButton children='+' className={`${OrderDetailsCss.incButton} ${OrderDetailsCss.plusBtn}`} />
                            </div>
                            <div className={OrderDetailsCss.priceBox}>
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