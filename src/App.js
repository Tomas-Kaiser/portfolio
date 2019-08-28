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
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  componentDidMount() {

    // Debounce function
    function debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function () {
        let context = this, args = arguments;
        let later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args);
      }
    }

    // Fixed navbar when scrolling down
    const nav = document.querySelector(".navbar");
    const mainNavLinks = document.querySelectorAll("nav ul li a");

    const fixNav = (e) => {
      if (window.scrollY >= 90) {
        nav.classList.add("scroll-down-nav");
      } else {
        nav.classList.remove("scroll-down-nav");
      }
    }
    window.addEventListener("scroll", debounce(fixNav, 10));

    // Highlighted nav links based on position on the page
    const highlightedNavItem = (e) => {
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
    }
    window.addEventListener("scroll", debounce(highlightedNavItem, 10));

    // Exp slide in effect
    const sliderExps = document.querySelectorAll(".slide-in");
    let sectionExp = document.querySelector("#experience-education");

    function checkSlide(e) {
      sliderExps.forEach(sliderExp => {
        const slideInAt = window.scrollY + 250;
        if (sectionExp.offsetTop < slideInAt) {
          sliderExp.classList.add("active");
        } else {
          sliderExp.classList.remove("active");
        }
      });
    }
    window.addEventListener("scroll", debounce(checkSlide));

    // Fade in sections when scrolling down
    const sections = document.querySelectorAll(".fade");

    const fadeIn = (e) => {
      sections.forEach(section => {
        if (section.offsetTop < (window.scrollY + window.innerHeight - 300)) {
          console.log("Add class fade-in")
          section.classList.add("fade-in");
        } else {
          console.log("Remove class fade-in")
          section.classList.remove("fade-in");
        }
      })
    }

    window.addEventListener("scroll", debounce(fadeIn));

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
