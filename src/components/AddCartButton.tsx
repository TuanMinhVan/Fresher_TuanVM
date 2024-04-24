/* The code you provided is a React functional component called `AddCartButton`. Here's a breakdown of
what it does: */

import { useCarts } from '../contexts/CartContext';
import { Product } from '../models/product';

const AddCartButton: React.FC<{ product: Product }> = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCarts();

  const isExitCart = cartItems.some((item) => item.product.id === product.id);

  const handleCart = (event: any) => {
    event.stopPropagation();
    if (isExitCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="row">
      <button
        className={`product-add-to-cart ${
          isExitCart ? 'bg-danger' : 'bg-orange'
        }`}
        type="button"
        onClick={handleCart}>
        <i className="fas fa-cart-plus"></i>{' '}
        {isExitCart ? 'Remove from cart' : 'Add to cart'}
      </button>
    </div>
  );
};
export default AddCartButton;
