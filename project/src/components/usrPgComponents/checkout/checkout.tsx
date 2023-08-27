import React from "react";
import './checkout.css';
import CustomerSearchBox from "../searchBox/customerSearch/customerSrch";
import Receipt from "./receipt/receipt";
import OrderDetails from "./orderdetails/orderdetails";

const Checkout:React.FC=()=>{
    return(
        <div className="checkoutContainer">
        <CustomerSearchBox />
        <OrderDetails />
        <Receipt />
        </div>
    )
}
export default Checkout;