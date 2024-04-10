import './style.scss';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  Row,
  Table,
} from 'react-bootstrap';
import ReactPullToRefresh from 'react-pull-to-refresh';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import AddCartButton from '../../components/AddCartButton';
import LoadMoreHandler from '../../components/LoadMoreHandler';
import ProductDetail from '../../components/ProductDetail';
import { Product } from '../../models/product';
import {
  AppDispatch,
  RootState,
} from '../../redux/store';
import {
  fetchMoreProducts,
  fetchProducts,
  searchProducts,
} from '../../redux/thunks/productThunks';

const ProductList: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.productsState.products
  );

  const loading = useSelector(
    (state: RootState) => state.productsState.loading
  );

  const hasMore = useSelector(
    (state: RootState) => state.productsState.hasMore
  );

  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  const closeDialog = () => {
    setSelectedItem(null);
  };

  const openDetail = (product: Product) => {
    setSelectedItem(product);
  };

  const dispatch: AppDispatch = useDispatch();

  const handleRefresh = async () => {
    dispatch(fetchProducts());
  };

  const onLoadMore = () => {
    dispatch(fetchMoreProducts());
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <SearchInput />
      {loading && products.length === 0 && <p>Loading...</p>}

      <ReactPullToRefresh onRefresh={handleRefresh} loading={loading}>
        <Table bordered>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>View</th>
              <th>Add to cart</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductItem
                key={product.id}
                product={product}
                index={index}
                openDetail={openDetail}
              />
            ))}
            {hasMore && (
              <tr>
                <td colSpan={5} className="text-center">
                  <div className="loading-more">
                    ...Loading more products...
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </ReactPullToRefresh>
      <ProductDetail product={selectedItem} close={closeDialog}></ProductDetail>
      <LoadMoreHandler
        onLoadMore={onLoadMore}
        hasMore={hasMore}
        loadingMore={loading}
      ></LoadMoreHandler>
    </>
  );
};

const ProductItem: React.FC<{
  product: Product;
  index: number;
  openDetail: (product: Product) => void;
}> = ({ product, openDetail, index }) => {
  return (
    <tr key={product.id}>
      <td className="text-center">{index + 1}</td>
      <td className="text-left">{product.title}</td>
      <td className="text-center">
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td>
        <div className="image-table">
          <img
            src={product.images[0]}
            alt={product.title}
            className="img-fluid"
          />
        </div>
      </td>
      <td className="text-center">
        <i className="fa fa-eye cursor" onClick={() => openDetail(product)}></i>
      </td>
      <td className="text-center">
        <AddCartButton product={product} />
      </td>
    </tr>
  );
};

export default ProductList;
/* This `SearchInput` component is a functional component in React that provides a search input field
for users to search for products. Here's a breakdown of what it does: */

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchProducts(searchTerm));
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    dispatch(fetchProducts());
  };

  return (
    <Row className="mb-2 mt-2">
      <form onSubmit={handleSubmit} className="search-product">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button type="button" onClick={handleClearSearch}>
              <i className="fa fa-times"></i>
            </button>
          )}

          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </Row>
  );
};
