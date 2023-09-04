import React from "react";
import { AlterButtonProps } from "../../../interfaces/alter-button";

const AlterButton:React.FC<AlterButtonProps>=({children, className, onClick})=>{
    return(
       <button onClick={onClick} className={className}>{children}</button>
    )
}
export default AlterButton;