import { useReducer } from "react";
import CartContext from "./cartContext";
import { Item } from "../interfaces/meal-items";
import { CartState, CartProviderProps } from "../interfaces/cart-context";

const defaultCartState = {
    items: [],
    totalPrice: 0,
    subsidy: 0,
    topay: 0
};

type CartAction =
  | { type: "ADD"; item: Item }
  | { type: "REMOVE"; id: number }
  | { type: "CLEAR" };


const cartReducer = (state: CartState, action: CartAction)=>{
   if(action.type==='ADD'){
        const updatedTotal = state.totalPrice + action.item.price;
        const updatedSubsidy = state.subsidy + action.item.subsidy;
        const toBePaid = updatedTotal - updatedSubsidy;

        const existingCartItemIndex = state.items.findIndex(
          (item)=>item.id===action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
              ...existingCartItem,
              amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        }
        else{
          updatedItems = state.items.concat(action.item);
        }
        return {
          items:updatedItems,
          totalPrice:updatedTotal,
          subsidy: updatedSubsidy,
          topay: toBePaid
        };
   }
   if (action.type ==='REMOVE'){
    const existingCartItemIndex = state.items.findIndex(
      (item)=>item.id===action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotal = state.totalPrice - existingItem.price;
    const updatedSubsidy = state.subsidy - existingItem.subsidy;
    const toBePaid = updatedTotal - updatedSubsidy;
    let updatedItems;
    if(existingItem.amount ===1){
      updatedItems = state.items.filter(item=>item.id!==action.id);
    }else{
      const updatedItem = {...existingItem, amount:existingItem.amount-1};
      updatedItems=[...state.items];
      updatedItems[existingCartItemIndex]=updatedItem;
    }
    return{
      items: updatedItems,
      totalPrice:updatedTotal,
      subsidy: updatedSubsidy,
      topay: toBePaid
    }
  }
  if (action.type === 'CLEAR'){
    return defaultCartState;
  }
  return defaultCartState;
}

const CartProvider:React.FC<CartProviderProps> = (props)=>{
     const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
     const addItemToCartHandler = (item:Item)=>{
      dispatchCartAction({type: 'ADD', item:item});
     }
     const removeItemFromCartHandler = (key:number)=>{
      dispatchCartAction({type:'REMOVE', id:key});
     }
     const clearCartHandler = ()=>{
      dispatchCartAction({type:'CLEAR'});
     }

     const cartContext = {
      items: cartState.items,
      addItem:addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      clearCart: clearCartHandler,
      totalPrice: cartState.totalPrice,
      subsidy: cartState.subsidy,
      topay: cartState.totalPrice-cartState.subsidy
     }
     return <CartContext.Provider value={cartContext}>
      {props.children}
     </CartContext.Provider>
};

export default CartProvider;