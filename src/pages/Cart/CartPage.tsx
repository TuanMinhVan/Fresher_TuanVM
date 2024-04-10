import './style.scss';

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';

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
  const total = cartItems
    .reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  const quantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <Container className="py-5 h-100">
        <Row>
          <Card>
            <CardBody className="p-4">
              <Row>
                <Col md={7}>
                  <h5 className="text-left">
                    <a className="text-body text-decoration-none" href="/">
                      <i className="fas fa-long-arrow-alt-left me-2 "></i>
                      Continue shopping
                    </a>
                  </h5>
                  <hr />

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="text-left">
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0 text-bold">
                        You have{" "}
                        <span className="font-weight-bold">{quantity}</span>{" "}
                        items in your cart
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="text-muted">Sort by:</span>
                        <a href="#!" className="text-body text-decoration-none">
                          price
                          <i className="fas fa-angle-down mt-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  {cartItems.map((item) => (
                    <CartViewItem
                      key={item.product.id}
                      item={item}
                      removeFromCart={() => removeFromCart(item.product.id)}
                    />
                  ))}
                </Col>
                <Col md={5}>
                  <Card className="bg-primary text-white rounded-3">
                    <CardBody className="text-left">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="mb-0">Card details</h4>
                        {/* <Card.Img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          className="rounded-3"
                          style={{ width: "45px" }}
                          alt="Avatar"
                        /> */}
                      </div>
                      <h4 className="small">Card type</h4>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fa-brands fa-cc-mastercard fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fa-brands fa-cc-visa fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fa-brands fa-cc-amex fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fa-brands fa-cc-paypal fa-2x me-2" />
                      </a>
                      <form className="mt-4">
                        <Form.Control
                          className="mb-4"
                          type="text"
                          autoComplete="cc-name"
                          aria-label="Cardholder Name"
                          size="lg"
                          placeholder="Cardholder's Name"
                        />
                        <Form.Control
                          className="mb-4"
                          aria-label="Card Number"
                          autoComplete="cc-number"
                          type="text"
                          size="lg"
                          placeholder="1234 5678 9012 3457"
                        />
                        <Row className="mb-4">
                          <Col md={6}>
                            <Form.Control
                              className="mb-4"
                              autoComplete="cc-exp"
                              aria-label="Expiration"
                              type="text"
                              size="lg"
                              placeholder="MM/YYYY"
                              autoCorrect="on"
                            />
                          </Col>
                          <Col md={6}>
                            <Form.Control
                              className="mb-4"
                              autoComplete="cc-csc"
                              aria-label="CCV"
                              type="text"
                              size="lg"
                              placeholder="&#9679;&#9679;&#9679;"
                            />
                          </Col>
                        </Row>
                        {/* <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div> */}

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">{total}</p>
                        </div>
                        <div className="d-grid gap-2">
                          <Button variant="info" size="lg">
                            <div className="d-flex justify-content-center text-white">
                              <span>{total}</span>
                              <span className="ms-2">
                                Checkout{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default CartPage;
