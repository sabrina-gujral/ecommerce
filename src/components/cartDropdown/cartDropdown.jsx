import React from "react";
import "./cartDropdown.scss";
import CustomButton from "../custom-buttom/custom-button";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
