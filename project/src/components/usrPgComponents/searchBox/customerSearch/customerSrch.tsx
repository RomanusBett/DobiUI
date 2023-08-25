import React from "react";
import './customerSrch.css';

const CustomerSearchBox:React.FC =()=>{
      return(
        <div className="srch-customer-container">
            <div className="customer-info-title-box">
            <h2>Customer Information</h2>
            </div>
            <div className="customer-srch-title-box">
            <input className="customer-srch-input" placeholder="Customer Name"/>
            </div>
        </div>
      )
}
export default CustomerSearchBox;