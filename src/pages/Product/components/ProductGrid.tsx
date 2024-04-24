import '../style.scss';

import { Product } from '../../../models/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}
/* This code snippet defines a functional component named `ProductGrid` in TypeScript React. The
component takes in a prop `products` of type `Product[]` (an array of `Product` objects). */

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductGrid;
