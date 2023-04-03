import React from 'react'
import Cart from './pages/Cart';
import Home from "./pages/Home"
import Login from './pages/Login';
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route>
        <Route path="/products/:category" element={<ProductList/>}>
          
        </Route>
        <Route path="/login" element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <Login />
            )
          }>
        
        </Route>
        <Route path="/product/:id" element={<Product/>}>
          
        </Route>
        <Route path="/register" element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <Register />
            )
          }>
          
        </Route>
        <Route path="/cart" element={<Cart/>}>
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;