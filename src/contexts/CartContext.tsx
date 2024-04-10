import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  handleIncrement: (item: CartItem) => void;
  handleDecrement: (item: CartItem) => void;
  children?: React.ReactNode;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  handleIncrement: () => {},
  handleDecrement: () => {},
});
/**
 * The `CartProvider` component manages a shopping cart state in a React application.
 * @param  - The code snippet you provided is a `CartProvider` component in React that uses the
 * `useState` hook to manage a list of `Product` items in the shopping cart. It also defines functions
 * `addToCart` and `removeFromCart` to add and remove items from the cart respectively.
 * @returns The `CartProvider` component is being returned, which is a functional component that
 * provides a CartContext with cartItems state, addToCart, and removeFromCart functions as values. The
 * children of the `CartProvider` component are also rendered within the `CartContext.Provider`.
 */

export const CartProvider: React.FC<any> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, { product, quantity: 1 }]);
  };
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const handleIncrement = (item: CartItem) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.product.id === item.product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleDecrement = (item: CartItem) => {
    if (item.quantity === 1) {
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.product.id === item.product.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  useEffect(() => {
    const cartItems = sessionStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCarts = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCarts must be used within CartProvider");
  }
  return context;
};
