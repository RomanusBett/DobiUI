import { useContext } from "react";
import CartContext from "../../../../store/cartContext";
import { Item } from "../../../../../interfaces/meal-items";

const useCart = () => {
    const cartCtx = useContext(CartContext);

    const cartItemAddHandler = (item: Item) => {
        cartCtx.addItem(item)
    };

    const removeItemFromCart = (key: number) => {
        cartCtx.removeItem(key)
    };

    const addSingleItemToCart = (key: number) => {
        cartCtx.addSingleItem(key)
    }

    const findItemAmount = (key:number)=>{
        const foundItem = cartCtx.items.find(cartItem => cartItem.id === key)
        return foundItem ? (foundItem.amount || 0) : 0; 
    }

    return {
        cartItemAddHandler,
        removeItemFromCart,
        addSingleItemToCart,
        findItemAmount
    };
}
export default useCart;