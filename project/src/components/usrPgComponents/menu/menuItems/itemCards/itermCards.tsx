import React from "react";
import HomeCss from './itemCards.module.css'
import AlterButton from "../../../alterButton/alterButton";
import OrderDetailsCss from '../../../checkout/orderdetails/orderdetails.module.css'
import { ItemCardsProps } from "../../../../../interfaces/meal-items";
import useCart from "./handlerfunctions";

const ItemCards: React.FC<ItemCardsProps> = ({ items }) => {
    const { cartItemAddHandler, removeItemFromCart, findItemAmount } = useCart();  
      
    return (
        <div className={HomeCss.bigCardContainer}>
            {items.map((item) => (
                <div key={item.id}>
                    <div className={HomeCss.bigCardBox}>
                        <div className={HomeCss.imgPrcContainer}>
                            <div className={HomeCss.cardContentContainer}>
                                <div>
                                    <img className={HomeCss.dispImgItem} src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
                                </div>
                                <div>
                                    <p><span className={HomeCss.itemPrice}>{item.price}</span> <span className={HomeCss.currencyType}>ksh</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className={HomeCss.descIncContainer}>
                                <div>
                                    <li> {item.mealName}</li>
                                    <div>
                                        <p>12 remaining</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={HomeCss.menuItemVarBox}>
                                    <AlterButton onClick={()=>removeItemFromCart(item.id)} children='-' className={`${OrderDetailsCss.decButton} ${OrderDetailsCss.minusBtn}`} />
                                    <p>{findItemAmount(item.id)}</p>
                                    <AlterButton onClick={cartItemAddHandler.bind(null, item)} children='+' className={`${OrderDetailsCss.incButton} ${OrderDetailsCss.plusBtn}`} />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemCards;
