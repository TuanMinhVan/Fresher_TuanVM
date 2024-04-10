import { Button } from 'react-bootstrap';

import { useCarts } from '../contexts/CartContext';
import { Product } from '../models/product';

const AddCartButton: React.FC<{ product: Product }> = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCarts();

  const isExitCart = cartItems.some((item) => item.product.id === product.id);

  const handleCart = () => {
    if (isExitCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <Button variant={isExitCart ? "danger" : "primary"} onClick={handleCart}>
      <i className={`fa ${isExitCart ? "fa-minus" : "fa-plus"}`}></i>
    </Button>
  );
};
export default AddCartButton;
