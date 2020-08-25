import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Category from './Components/Category';
import Product from './Components/Product';
import Admin from './Components/Admin';

function App() {
  return (

    <Router>
      <HomePage/>
    <Route path ='/home' render={()=><h1>Home</h1>}/>
    <Route path ='/Category' component={Category}/>
    <Route path ='/Product' component={Product}/>
    <Route path ='/home' componenent={Admin}/>
    </Router>

  );
}

export default App;
