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
                                    <img className="dispImgItem" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
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
