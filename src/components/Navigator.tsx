import { useContext, useState } from "react";

import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

import {
  faBell,
  faClose,
  faComment,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchContext from "../contexts/SearchContext";

/* The Navigator class renders a navigation bar with links to different sections and a cart button. */

const Navigator: React.FC = () => {
  const { handleSearchChange } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSearchChange(searchTerm);
  };

  const clearSearch = (event: any) => {
    event.preventDefault();
    setSearchTerm("");
    handleSearchChange("");
  };

  return (
    <Navbar expand="lg" className="shopee-navbar">
      <Container>
        <Navbar.Brand href="/" className="logo">
          Shopping Mall
        </Navbar.Brand>
        <InputGroup className="search-bar">
          <Form onSubmit={handleSubmit} style={{ width: "calc(100% - 42px)" }}>
            <FormControl
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
          {searchTerm.length > 0 ? (
            <Button variant="danger" type="button" onClick={clearSearch}>
              <FontAwesomeIcon icon={faClose} />
            </Button>
          ) : (
            <Button variant="danger" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          )}
        </InputGroup>
        <Nav className="nav-links">
          <Nav.Link href="#" className="nav-links-row">
            <FontAwesomeIcon icon={faBell} /> Thông báo
          </Nav.Link>
          <Nav.Link href="#" className="nav-links-row">
            <FontAwesomeIcon icon={faComment} /> Chat
          </Nav.Link>
          <Nav.Link href="/cart" className="nav-links-row">
            <FontAwesomeIcon icon={faShoppingCart} />
            Giỏ Hàng
          </Nav.Link>
          <Nav.Link href="#" className="nav-links-row">
            Đăng nhập
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigator;
