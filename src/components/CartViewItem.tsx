import { Card } from "react-bootstrap";

import { CartItem, useCarts } from "../contexts/CartContext";

/**
 * The CartItem component in TypeScript React displays information about a product in a shopping cart
 * and allows the user to remove it.
 * @param  - The `CartItem` component is a functional component in React that represents an item in a
 * shopping cart. It takes two props:
 * @returns The `CartItem` component is being returned. It displays information about a product item in
 * a cart, including the item's image, title, price, and a "Remove" button that triggers the
 * `removeFromCart` function when clicked.
 */

const CartViewItem: React.FC<{
  item: CartItem;
  removeFromCart: () => void;
}> = ({ item, removeFromCart }) => {
  return (
    <Card className="mb-3">
      <div className="d-flex justify-content-between">
        <div className="card-body">
          <div className="d-flex justify-content-between flex-md-row flex-column">
            <div className="d-flex flex-row align-items-center">
              <div>
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className="img-fluid rounded-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="ms-3">
                <h6>{item.product.title}</h6>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "100px" }}>
                <h6 className="mb-0">
                  {item.product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h6>
              </div>
              <QuantityButton item={item}></QuantityButton>
              <div style={{ width: "100px" }}>
                <h5 className="mb-0 text-orange">
                  {(item.product.price * item.quantity).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                    }
                  )}
                </h5>
              </div>
              <button
                style={{ color: "#cecece" }}
                onClick={removeFromCart}
                className="btn"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartViewItem;

const QuantityButton: React.FC<{ item: CartItem }> = ({ item }) => {
  const { handleIncrement, handleDecrement } = useCarts();
  return (
    <div className="quantity-button ">
      <button onClick={() => handleDecrement(item)} className="decrement">
        -
      </button>
      <span>{item.quantity}</span>
      <button onClick={() => handleIncrement(item)} className="increment">
        +
      </button>
    </div>
  );
};
