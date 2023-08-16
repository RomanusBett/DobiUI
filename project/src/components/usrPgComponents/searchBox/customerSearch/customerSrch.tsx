import React from "react";
import './customerSrch.css';

const CustomerSearchBox:React.FC =()=>{
      return(
        <div>
            <div>
            <h1>Customer Information</h1>
            </div>
            <div>
            <input placeholder="Customer Name"/>
            </div>
        </div>
      )
}
export default CustomerSearchBox;