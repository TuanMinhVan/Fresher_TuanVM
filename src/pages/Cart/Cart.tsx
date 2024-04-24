import './style.scss';

import { Container } from 'react-bootstrap';

import CartViewItem from '../../components/CartViewItem';
import { useCarts } from '../../contexts/CartContext';

/**
 * The Cart component renders a list of items from the cart with the ability to remove items.
 * @returns The Cart component is returning a div with a class name of "card-container" that contains a
 * list of CardItem components. Each CardItem component is rendered based on the items in the cartItems
 * array, with a unique key assigned to each item. The CardItem component also receives the item object
 * and a function removeFromCart that removes the item from the cart when called.
 */
const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCarts();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <i className="fas fa-shopping-cart"></i>
      </div>
    );
  }

  return (
    <Container className="py-5 h-100">
      {cartItems.map((item) => (
        <CartViewItem
          key={item.product.id}
          item={item}
          removeFromCart={() => removeFromCart(item.product.id)}
        />
      ))}
    </Container>
  );
};

export default CartPage;
