import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './assets/css/reset.css'
import Main from './router07/Main';
import Product from './router07/Product';
import ProductDetail from './router07/ProductDetail';
import './router07/style.css'

const App = () => {
  return (
    <BrowserRouter>
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product">
        <Route element={<Product />} index />
        <Route path=":productID" element={<ProductDetail />} />
      </Route>
    </Routes>
    </>
    </BrowserRouter>
  );
};

export default App;