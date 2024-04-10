import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

/**
 * The CartButton component displays an icon representing a shopping cart along with the number of
 * items in the cart.
 * @returns The `CartButton` component is returning a div element with the class name "cart-button"
 * containing an icon element with the class "fas fa-shopping-cart" and a span element displaying the
 * length of the `cartItems` array from the `CartContext`.
 */
const CartButton = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-button">
      <i className="fas fa-shopping-cart"></i>
      <span>({total})</span>
    </div>
  );
};

export default CartButton;
