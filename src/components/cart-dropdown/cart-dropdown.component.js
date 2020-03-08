import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItem, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.length ? (
          cartItem.map(cartItem => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className="emplty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems
});

// const MapStateToProps = state => ({
//   cartItem: selectCartItems(state)
// });
// const MatStateToProps = ({ cart: { cartItem } }) => ({
//   cartItem
// });

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
