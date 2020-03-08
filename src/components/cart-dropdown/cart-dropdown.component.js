import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
const CartDropdown = ({ cartItem }) => (
  <div className="cart-dropdown">
    {console.log(cartItem)}

    <div className="cart-items">
      {cartItem.map(cartItem => (
        <CartItem item={cartItem} key={cartItem.id} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const MatStateToProps = state => ({
  cartItem: selectCartItems(state)
});
// const MatStateToProps = ({ cart: { cartItem } }) => ({
//   cartItem
// });
export default connect(MatStateToProps, null)(CartDropdown);
