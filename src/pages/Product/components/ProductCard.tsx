import { useNavigate } from 'react-router-dom';

import AddCartButton from '../../../components/AddCartButton';
import { Product } from '../../../models/product';

interface ProductCardProps {
  product: Product;
}
/**
 * The ProductCard component displays product information and allows users to view details and add the
 * product to the cart.
 * @param  - It looks like you have a `ProductCard` component in a React application. The component
 * receives `product` as a prop and destructure its properties such as `title`, `price`, `images`, and
 * `description`.
 * @returns The `ProductCard` component is returning JSX elements that represent a product card. It
 * includes the product's image, title, price, description, and an "Add to Cart" button. When the
 * product card is clicked, it opens a `ProductDetail` component with the selected product's details.
 */

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { title, price, images, description, id } = product;
  const goToProduct = (event: any) => {
    event.preventDefault();
    navigate(`/products/${id}`);
  };
  return (
    <>
      <div className="product-card text-center" onClick={goToProduct}>
        <div className="product-image">
          <img src={images[0]} alt={title} />
        </div>
        <h3 className="product-name">{title}</h3>
        <div className="product-price">
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </div>
        <p className="product-description">{description}</p>
        <div className="row">
          <AddCartButton product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
