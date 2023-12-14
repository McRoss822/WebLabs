import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './HomePage/HomePage'
import {CatalogPage}  from './CatalogPage/CatalogPage';
import {ItemPage} from './ItemPage/ItemPage'
import { createContext } from 'react';
import {CartPage} from "./CartPage/CartPage"
import { Provider } from 'react-redux';
import store from './reducers/store'

export const CarsContext = createContext()


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<HomePage/>}/>
        <Route path ="/catalog" element={<CatalogPage/>}/>
        <Route path = "/catalog/:id" element={<ItemPage/>}/>
        <Route path = "/cart" element={<CartPage/>}/>
      </Routes>
    </Router>
   
    );
}

export default App;
