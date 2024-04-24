import { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Product } from '../models/product';
import ProductGrid from './Product/components/ProductGrid';

/**
 * The `ProductByCategory` component fetches and displays products based on a specified category slug
 * in a React application.
 * @returns The `ProductByCategory` component returns either a loading message or a list of products
 * based on the value of the `loading` state. If `loading` is true, it displays a "Loading..." message.
 * Once the products are fetched, it displays the heading "Product by {slug}" and renders the
 * `ProductGrid` component with the fetched products.
 */

const ProductByCategory: React.FC = () => {
  const slug = useParams<{ slug: string }>().slug;

  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductByCate = async () => {
      setLoading(true);
      try {
        const response = await axios(
          `https://dummyjson.com/products/category/${slug}`
        );
        const data = await response.data;
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };
    getProductByCate();
  }, [slug]);
  return loading ? (
    <div className="container">
      <h1 className="m-5">Loading...</h1>
    </div>
  ) : (
    <div className="container">
      <h1 className="m-5">Product by {slug}</h1>
      <ProductGrid products={products} />
    </div>
  );
};
export default ProductByCategory;
