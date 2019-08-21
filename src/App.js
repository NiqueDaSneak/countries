import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import Countries from './pages/Countries'
import Country from './pages/Country'

// import logo from './logo.svg';
import './App.css';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/countries' component={Countries} />
      <Route path='/country/:code' component={Country} />
    </Router>
  );
}

export default AppRouter;
