import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ProductList from './components/ProductList.jsx';
import Product from './components/Product.jsx';
import ProductError from './components/ProductError.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductList /> },
      {
        path: 'category/:id',
        element: <ProductList />,
      },
      {
        path: 'product/:id',
        element: <Product />,
        errorElement: <ProductError />,
      },
      { path: 'cart', element: <ShoppingCart /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
