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
    const mainNavLinks = document.querySelectorAll("nav ul li a");

    // Fixed navbar when scrolling down
    const fixNav = (e) => {
      if (window.scrollY >= 80) {
        nav.classList.add("scroll-down-nav");
      } else {
        nav.classList.remove("scroll-down-nav");
      }
    }
    window.addEventListener("scroll", fixNav);

    // Highlighted nav links based on position on the page
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;
      
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        
        if (section.offsetTop - 80 <= fromTop &&
          section.offsetTop + section.offsetHeight - 80 > fromTop) {
            link.classList.add("current");
          } else {
            link.classList.remove("current");
          }
      });
    });
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
