import { useCarts } from '../contexts/CartContext';
import { Product } from '../models/product';

/**
 * The AddCartButton component in TypeScript React manages adding and removing products from a cart
 * based on their availability.
 * @param  - The code you provided is a React functional component called `AddCartButton` that renders
 * a button to either add a product to the cart or remove it from the cart based on whether the product
 * is already in the cart.
 */
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
    <button
      className={` text-white ${
        isExitCart ? 'bg-red-600' : 'bg-indigo-600'
      } flex w-full justify-center items-center py-2 px-4 rounded-md mt-2`}
      type="button"
      onClick={handleCart}>
      <i className="fas fa-cart-plus"></i>{' '}
      {isExitCart ? 'Remove from cart' : 'Add to cart'}
    </button>
  );
};
export default AddCartButton;
