import React, { Component } from 'react';
import './App.css';

// Import Components
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

// Define App
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar/>
          <Header/>
          <About/>
          <Skills/>
          <Portfolio/>
        </div> {/* Container */}
          <Footer/>
      </div>
    );
  }
}

export default App;
