import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './../src/productlist.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Popular Product</h1>
        </header>
      <ProductList></ProductList>
      </div>
    );
  }
}

export default App;
