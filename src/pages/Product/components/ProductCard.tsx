import { useState } from "react";

import AddCartButton from "../../../components/AddCartButton";
import { Product } from "../../../models/product";
import ProductDetail from "../ProductDetail";

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
  const { title, price, images, description } = product;

  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const closeDialog = () => {
    setSelectedItem(null);
  };

  const openDetail = (event: any) => {
    event.preventDefault();
    setSelectedItem(product);
  };

  return (
    <>
      <div className="product-card text-center" onClick={openDetail}>
        <div className="product-image">
          <img src={images[0]} alt={title} />
        </div>
        <h3 className="product-name">{title}</h3>
        <div className="product-price">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <p className="product-description">{description}</p>
        <AddCartButton product={product} />
      </div>
      <ProductDetail product={selectedItem} close={closeDialog}></ProductDetail>
    </>
  );
};

export default ProductCard;
