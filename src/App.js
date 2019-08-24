import React, { Component } from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import AboutMe from './components/layout/AboutMe';
import Technologies from './components/layout/Technologies';
import Projects from './components/layout/Projects';
import Experience from './components/layout/Experience';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';

import './App.css';

class App extends Component {
  componentDidMount() {
    const nav = document.querySelector(".navbar");

    const fixNav = (e) => {
      if (window.scrollY >= 80) {
        nav.classList.add("scroll-down-nav");
      } else {
        nav.classList.remove("scroll-down-nav");
      }
    }
    window.addEventListener("scroll", fixNav);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
