// src/App.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import productData from './data/full-products';

import Cart from './components/Cart';
import Orders from './components/Orders';

import { CartProvider } from './state/CartProvider';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = productData.filter((p) => {
    const text =
      (p.description || p.alt_description || p.title || "").toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });

  return (
    <CartProvider>
      <Layout onSearch={setSearchTerm}>
        <Routes>
          <Route path="/" element={<CardList data={filteredData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
