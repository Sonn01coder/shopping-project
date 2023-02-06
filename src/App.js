import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Content from './components/content/Content';
import ProductScreen from './components/content/products/ProductScreen';
import Nav from './components/nav/Nav';
import Store from './store/Store';
 import Login from './login/Login';
import Register from './login/Register';
import PaymentStore from './payment/PaymentStore';
import Success from './components/success/Success';
import SearchProduct from './searchProduct/SearchProduct';


function App(props) {
  return (
    <BrowserRouter>
        <section className='App'>
          <Nav />
          <Routes>
            <Route exact path="/shopping-project" element={<Content />} />
            <Route path='/cart' element={<Store />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/payment' element={<PaymentStore />} />
            <Route path='/success' element={<Success />} />
            <Route path='/search/:keywords' element={<SearchProduct />} />
          </Routes>
       </section>
    </BrowserRouter>
  );
}

export default App;