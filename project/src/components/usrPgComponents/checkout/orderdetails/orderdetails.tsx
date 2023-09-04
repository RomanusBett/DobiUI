import React, {useContext} from "react";
import OrderDetailsCss from './orderdetails.module.css'
import AlterButton from "../../alterButton/alterButton";
import useCart from "../../menu/menuItems/itemCards/handlerfunctions";
import CartContext from "../../../store/cartContext";
import { Item } from "../../../../interfaces/meal-items";

const OrderDetails:React.FC =()=>{
    const { removeItemFromCart, addSingleItemToCart } = useCart();
    const cartCtx = useContext(CartContext);   
    
    return(
        <div className={OrderDetailsCss.orderDetailsContainer}>
            <div className={OrderDetailsCss.orderdescHeaderBox}>
            <p>Order details</p>
            </div>
           {cartCtx.items.map((item:Item)=>{
            return(
                <div className={OrderDetailsCss.orderDetailsBigContainer}>
                    <div className={OrderDetailsCss.orderdetImagebox}>
                    <img className={OrderDetailsCss.orderMealImage} src={item.mealImage} alt='order-fd-img'/>
                    </div>
                    <div className={OrderDetailsCss.orderDetBox}>
                        <div className={OrderDetailsCss.orderDescBox}>
                        <li key={item.id}>{item.mealName}</li>
                        </div>
                        <div className={OrderDetailsCss.orderAmtBigContainer}>
                            <div className={OrderDetailsCss.orderVarBox}>
                              <AlterButton onClick={()=>removeItemFromCart(item.id)} children='-' className={`${OrderDetailsCss.decButton} ${OrderDetailsCss.minusBtn}`} />
                              <p>{item.amount}</p>
                              <AlterButton onClick={()=>addSingleItemToCart(item.id)} children='+' className={`${OrderDetailsCss.incButton} ${OrderDetailsCss.plusBtn}`} />
                            </div>
                            <div className={OrderDetailsCss.priceBox}>
                               <p>{item.price}</p>
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