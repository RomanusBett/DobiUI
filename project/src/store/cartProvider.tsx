import { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
    items: [],
    totalPrice: 0,
    subsidy: 0
}