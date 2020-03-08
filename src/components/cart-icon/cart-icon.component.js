import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { selectCartCartItemCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const MapStateToProps = state => ({
  itemCount: selectCartCartItemCount(state)
});

// const MapStateToProps = ({ cart: { cartItem } }) => ({
//   itemCount: cartItem.reduce(
//     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//     0
//   )
// });

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(MapStateToProps, mapDispatchToProps)(CartIcon);
