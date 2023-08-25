import React from "react";
import './itemCards.css';

interface ItemCardsProps {
    items: string[]
}

const ItemCards: React.FC<ItemCardsProps> = ({ items }) => {
    return (
        <div className="big-card-container">
            {items.map((item) => (
                <div key={item}>
                    <div className="big-card-box">
                        <div className="img-prc-container">
                            <div className="card-content-container">
                                <div>
                                    <p>image</p>
                                </div>
                                <div>
                                    <p>price</p>
                                </div>
                            </div>
                        </div>
                        <div className="desc-inc-container">
                            <div className="card-content-container">
                                <div>
                                    <li>{item}</li>
                                </div>
                                <div>
                                    <p>increment field</p>
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
