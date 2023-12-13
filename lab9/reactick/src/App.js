import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './HomePage/HomePage'
import {CatalogPage}  from './CatalogPage/CatalogPage';
import {ItemPage} from './ItemPage/ItemPage'
import { createContext } from 'react';

export const CarsContext = createContext()

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<HomePage/>}/>
        <Route path ="/catalog" element={<CatalogPage/>}/>
        <Route path = "/catalog/:id" element={<ItemPage/>}/>
      </Routes>
    </Router>
    );
}

export default App;
