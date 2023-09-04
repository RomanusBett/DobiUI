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

    const addSingleItemToCart = (key: number) =>{
        cartCtx.addSingleItem(key)
    }

    return {
        cartItemAddHandler,
        removeItemFromCart,
        addSingleItemToCart,
    };
}
export default useCart;