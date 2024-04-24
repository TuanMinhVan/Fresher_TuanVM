import './style.scss';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { Product } from '../../models/product';
import { baseUrl } from '../../redux/thunks/productThunks';
import ProductGrid from './components/ProductGrid';

/* This code snippet defines a functional component `ProductDetailPage` in a TypeScript React
application. Here's a breakdown of what the code is doing: */

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/products/${id}`);
        const productData: Product = response.data;
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return isLoading ? (
    <div className="container">
      <h1 className="m-5">Loading...</h1>
    </div>
  ) : product ? (
    <>
      <div className="product-detail container">
        <Row className="p-4">
          <Col md={6}>
            <img src={product.images[0]} alt={product.title} />
          </Col>
          <Col md={6} className="text-left">
            <h2 className="product-name">{product.title}</h2>
            <p className="price">Price: ${product.price}</p>
            <p>{product.description}</p>
            <div className="product-buttons">
              <button className="btn bg-orange text-white">
                <i className="fas fa-shopping-cart"></i>
                Thêm vào giỏ hàng
              </button>
              <button className="btn ms-3 bg-orange text-white">
                Mua ngay
              </button>
            </div>
          </Col>
        </Row>
      </div>
      {product !== null && product.category && (
        <SameCategoryProduct product={product} />
      )}
    </>
  ) : (
    <div className="container">
      <h1 className="m-5">Product not found</h1>
    </div>
  );
};
export default ProductDetailPage;

interface SameCategoryProductProps {
  product: Product;
}
/**
 * The function `SameCategoryProduct` fetches and displays products from the same category as the input
 * product in a React component.
 * @param  - The code you provided is a React functional component called `SameCategoryProduct` that
 * fetches products from a dummy API based on the category of a given product. It then filters out the
 * current product from the fetched products and displays the remaining products in a `ProductGrid`
 * component.
 * @returns The `SameCategoryProduct` component is returning a container div with a heading "Sản phẩm
 * cùng loại" (Products of the same category) and either a "Loading..." message or a `ProductGrid`
 * component displaying the products fetched from the API that belong to the same category as the
 * current product.
 */

const SameCategoryProduct: React.FC<SameCategoryProductProps> = ({
  product,
}) => {
  const slug = product.category;

  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductByCate = async () => {
      setLoading(true);
      try {
        const response = await axios(
          `https://dummyjson.com/products/category/${slug}`
        );
        const data = response.data.products;
        setProducts(data.filter((p: Product) => p.id !== product.id));
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };
    getProductByCate();
  }, [product.id, slug]);

  return (
    <div className="container">
      <h3 className="text-left mt-3 mb-3">Sản phẩm cùng loại </h3>
      {loading ? <h1>Loading...</h1> : <ProductGrid products={products} />}
    </div>
  );
};
