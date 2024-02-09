import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import ProtectRoute from './protectRoute';
import Home from './components/fronted/home';
import ForgotPass from './components/fronted/forgotPassworf';
import ProductList from './components/fronted/productList/productList';
import { findAllByTestId } from '@testing-library/react';

const App = () => {
const location = useLocation();

useEffect(()=>{
  if(location.pathname === "/" || location.pathname === "/forgotPassword"){
    sessionStorage.setItem('token',false);
  }
},[location])
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home headerType="1" />} />
        <Route path="/forgotPassword" exact element={<ForgotPass headerType="1" />} />
        <Route element={<ProtectRoute />}>
          <Route path="/productList" exact element={<ProductList headerType="2" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
