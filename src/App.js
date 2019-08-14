import React, { Component } from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import AboutMe from './components/layout/AboutMe';
import Technologies from './components/layout/Technologies'
import Projects from './components/layout/Projects'

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Navbar />
        <AboutMe />
        <Technologies />
        <Projects />
      </div>
    )
  }
}

export default App;
