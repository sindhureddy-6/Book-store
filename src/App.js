import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Amplify
import { Amplify } from 'aws-amplify'
import { BookProvider } from './context/books';
import { CartProvider } from './context/cart';
// Pages
import Home from './pages/Home';
import Error from './pages/Error';
import Books from './pages/Books';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import BookDetails from './pages/BookDetails';
import Admin from './pages/Admin';

// Components
import Header from './components/Header';

// Amplify Configurations
import config from './aws-exports.js';

Amplify.configure(config);


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
       <Route path="/" element={<BookProvider><Home /></BookProvider>} />
        <Route path="/cart" element={<CartProvider><Cart /></CartProvider>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/books" element={<BookProvider><Books/></BookProvider>}/>
        <Route path="/books/:id" element={<CartProvider><BookProvider><BookDetails /></BookProvider></CartProvider>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
