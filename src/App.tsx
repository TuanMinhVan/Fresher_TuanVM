import './App.css';

import React, { Suspense } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import BackToTopButton from './components/BackTopTop';
import Navigator from './components/Navigator';
import { CartProvider } from './contexts/CartContext';
import ProductDetailPage from './pages/Product/ProductDetail';
import ProductPage from './pages/Product/ProductPage';

const AboutPage = React.lazy(() => import("./pages/About/AboutPage"));

const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <Navigator />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/products/:productId"
                element={<ProductDetailPage />}
              />
            </Routes>
          </Suspense>
          <BackToTopButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
