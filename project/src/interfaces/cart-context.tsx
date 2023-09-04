import { ReactNode } from "react";
import { Item } from "./meal-items"
export interface CartContextType{
    items: Item[],
    totalPrice: number,
    addItem: (item: Item)=>void,
    subsidy: number,
    removeItem: (key:number)=>void,
    clearCart: ()=>void,
    addSingleItem: (key:number)=>void
}
export interface CartState {
    items: Item[],
    totalPrice: number,
    subsidy: number,
  }

export interface CartProviderProps {
    children: ReactNode;
}
export type CartAction =
| { type: "ADD"; item: Item }
| { type: "REMOVE"; id: number }
| { type: "ADDONE"; id: number}
| { type: "CLEAR" };