import { createSelector } from "reselect";
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItem
);

export const selectCartCartItemCount = createSelector(
  [selectCartItems],
  cartItem =>
    cartItem.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
