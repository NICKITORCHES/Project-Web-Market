import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React from 'react';
import ProductListPage from './Pages/ProductListPage/ProductListPage';
import ProductCategoriesPage from './Pages/ProductCategoriesPage/ProductCategoriesPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage';

function App () {
  return (  
    <div>
    <Router>
      <Header/>
        <Routes>
          <Route path='/Home' element={<HomePage/>}/>
          <Route path='/Error' element={<ErrorPage/>}/>
          <Route path='/Catalog' element={<ProductListPage/>}/>
          <Route path='/Categories' element={<ProductCategoriesPage/>}/>
          <Route path='/Cart' element={<ShoppingCartPage/>}/>
        </Routes>
      {/* <ErrorPage/> */}
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
