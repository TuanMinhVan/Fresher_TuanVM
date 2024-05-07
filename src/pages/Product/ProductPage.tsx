import React, { useEffect } from 'react';

import ReactPullToRefresh from 'react-pull-to-refresh';
import { useDispatch, useSelector } from 'react-redux';

import LoadMoreHandler from '../../components/LoadMoreHandler';
import { AppDispatch, RootState } from '../../redux/store';
import {
  fetchMoreProducts,
  fetchProducts,
} from '../../redux/thunks/productThunks';
import ProductGrid from './components/ProductGrid';

/**
 * The `ProductList` component in TypeScript React fetches and displays a list of products, with
 * features like search, refresh, and load more functionality.
 * @returns The `ProductList` component is returning JSX elements that include a search bar, loading
 * indicator, error message, a product grid, and a load more handler. The structure of the returned JSX
 * elements is as follows:
 */

const ProductList: React.FC = () => {
  const search = useSelector((state: RootState) => state.productsState.search);

  const error = useSelector((state: RootState) => state.productsState.error);

  const products = useSelector(
    (state: RootState) => state.productsState.products
  );

  const loading = useSelector(
    (state: RootState) => state.productsState.loading
  );

  const hasMore = useSelector(
    (state: RootState) => state.productsState.hasMore
  );

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

  if (search.length !== 0 && products.length === 0 && !loading) {
    return (
      <div className="no-results">
        <p>No results found for "{search}"</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div>
            {loading && products.length === 0 && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}
            <ReactPullToRefresh onRefresh={handleRefresh} loading={loading}>
              <ProductGrid products={products} />
            </ReactPullToRefresh>
          </div>
          <LoadMoreHandler
            onLoadMore={onLoadMore}
            hasMore={hasMore}
            loadingMore={loading}></LoadMoreHandler>
        </div>
      </div>
    </>
  );
};

export default ProductList;
