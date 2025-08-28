import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './HomePage';
import BrandsPage from './BrandsPage';
import ProductsPage from './ProductsPage';
import ContactPage from './ContactPage';
import Tyres from './Tyres';
import Batteries from './Batteries';
import Lubricants from './Lubricants';
import Tubes from './Tubes';
import './App.css'

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/brands" exact={true} component={BrandsPage}/>
          <Route path="/products" exact={true} component={ProductsPage}/>
          <Route path="/tyres" exact={true} component={Tyres}/>
          <Route path="/products/tyres" exact={true} component={Tyres}/>
          <Route path="/products/batteries" exact={true} component={Batteries}/>
          <Route path="/products/lubricants" exact={true} component={Lubricants}/>
          <Route path="/products/tubes" exact={true} component={Tubes}/>
          <Route path="/contact" exact={true} component={ContactPage}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
