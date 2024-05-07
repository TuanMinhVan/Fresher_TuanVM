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
    <div className="bg-white">
      <h1 className="m-5">Loading...</h1>
    </div>
  ) : (
    <div className="bg-white">
      <div className="pt-6 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <a href="/" className="mr-2 text-sm font-medium text-gray-900">
                  Home
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a href="/" className="mr-2 text-sm font-medium text-gray-900">
                  {slug}
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};
export default ProductByCategory;
