import { CartItem, useCarts } from '../contexts/CartContext';
import QuantityButton from './QuantityButton';

/**
 * The CartItem component in TypeScript React displays information about a product in a shopping cart
 * and allows the user to remove it.
 * @param  - The `CartItem` component is a functional component in React that represents an item in a
 * shopping cart. It takes two props:
 * @returns The `CartItem` component is being returned. It displays information about a product item in
 * a cart, including the item's image, title, price, and a "Remove" button that triggers the
 * `removeFromCart` function when clicked.
 */

interface CartItemProps {
  item: CartItem;
  removeFromCart: () => void;
}

const CartViewItem: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
  const { handleIncrement, handleDecrement } = useCarts();

  return (
    <div className="flex w-full shadow-sm justify-items-center items-center p-2 m-1">
      <div className="w-16 h-16 rounded-md">
        <img
          src={item.product.images[0]}
          alt={item.product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-auto text-left ml-2">
        <h6>{item.product.title}</h6>
      </div>
      <h6>
        {item.product.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </h6>
      <QuantityButton
        quantity={item.quantity}
        handleIncrement={() => handleIncrement(item)}
        handleDecrement={() => handleDecrement(item)}></QuantityButton>

      <button
        style={{ color: '#cecece' }}
        onClick={removeFromCart}
        className="btn mr-2 ml-2">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartViewItem;
