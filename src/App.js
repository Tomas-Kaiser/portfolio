import React, { Component } from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Navbar />
      </div>
    )
  }
}

export default App;
