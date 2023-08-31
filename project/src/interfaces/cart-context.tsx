import { ReactNode } from "react";
import { Item } from "./meal-items"
export interface CartContextType{
    items: Item[],
    totalPrice: number,
    addItem: (item: Item)=>void,
    subsidy: number,
    removeItem: (key:number)=>void,
    clearCart: ()=>void
}
export interface CartState {
    items: Item[],
    totalPrice: number,
    subsidy: number,
    topay: number
  }

export interface CartProviderProps {
    children: ReactNode;
}