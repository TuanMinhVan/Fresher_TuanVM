import './App.scss';

import React, { Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BackToTopButton from './components/BackTopTop';
import Navigator from './components/Navigator';
import { CartProvider } from './contexts/CartContext';
import { SearchProvider } from './contexts/SearchContext';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/Product/ProductDetailPage';
import ProductList from './pages/Product/ProductPage';
import ProductByCategory from './pages/ProductByCate';

const AboutPage = React.lazy(() => import('./pages/About/AboutPage'));
const Cart = React.lazy(() => import('./pages/Cart/Cart'));

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <div className="App">
          <Navigator />
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/:slug" element={<ProductByCategory />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <BackToTopButton />
        </div>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
