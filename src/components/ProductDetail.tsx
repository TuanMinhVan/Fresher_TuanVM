import {
  Button,
  Col,
  Modal,
  Row,
} from 'react-bootstrap';

import { Product } from '../models/product';

interface ProductDetailProps {
  product: Product | null;
  close: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = (params) => {
  return (
    <Modal show={params.product !== null} onHide={params.close}>
      <Modal.Header closeButton>
        <Modal.Title>{params.product?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {params.product && (
          <Row>
            <Col sm={8}>
              <h5>Name: {params.product.title}</h5>
              <h6>
                Price:{" "}
                {params.product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h6>
              <p>Description: {params.product.description}</p>
            </Col>
            <Col sm={4}>
              <img
                src={params.product.images[0]}
                alt={params.product.title}
                className="img-fluid"
              />
            </Col>
          </Row>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={params.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ProductDetail;
