import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherprops }) => {
    console.log(otherprops);
 return <button className="custom-button">{children}</button>
};

export default CustomButton;
