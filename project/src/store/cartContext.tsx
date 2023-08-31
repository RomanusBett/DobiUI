import { createContext } from "react";
import { CartContextType } from "../interfaces/cart-context";

const CartContext = createContext<CartContextType>({
    items: [],
    totalPrice: 0,
    addItem: (item) => { },
    subsidy: 0,
    removeItem: (key) => { },
    clearCart: () => { }
});
export default CartContext;