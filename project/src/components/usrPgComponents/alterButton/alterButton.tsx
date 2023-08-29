import React from "react";

interface AlterButtonProps {
    children: string,
    className: string;
}

const AlterButton:React.FC<AlterButtonProps>=({children, className})=>{
    return(
       <button className={className}>{children}</button>
    )
}
export default AlterButton;