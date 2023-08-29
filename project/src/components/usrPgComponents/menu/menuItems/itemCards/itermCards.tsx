import React from "react";
import HomeCss from './itemCards.module.css'
import AlterButton from "../../../alterButton/alterButton";
import OrderDetailsCss from '../../../checkout/orderdetails/orderdetails.module.css'

interface ItemCardsProps {
    items: string[]
}

const ItemCards: React.FC<ItemCardsProps> = ({ items }) => {
    return (
        <div className={HomeCss.bigCardContainer}>
            {items.map((item) => (
                <div key={item}>
                    <div className={HomeCss.bigCardBox}>
                        <div className={HomeCss.imgPrcContainer}>
                            <div className={HomeCss.cardContentContainer}>
                                <div>
                                    <img className={HomeCss.dispImgItem} src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
                                </div>
                                <div>
                                    <p>ksh103</p>
                                </div>
                            </div>
                        </div>
                        <div className={HomeCss.descIncContainer}>
                                <div>
                                    <li>{item}</li>
                                    <div>
                                        <p>12 remaining</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={HomeCss.menuItemVarBox}>
                                    <AlterButton children='-' className={`${OrderDetailsCss.decButton} ${OrderDetailsCss.minusBtn}`} />
                                    <p>3</p>
                                    <AlterButton children='+' className={`${OrderDetailsCss.incButton} ${OrderDetailsCss.plusBtn}`} />
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
