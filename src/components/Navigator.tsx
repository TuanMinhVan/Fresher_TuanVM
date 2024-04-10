import { Component } from 'react';

import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

import CartButton from './CartButton';

/* The Navigator class renders a navigation bar with links to different sections and a cart button. */

class Navigator extends Component {
  render() {
    return (
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">My App Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="/cart">
              <CartButton />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navigator;
