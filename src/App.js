import React, { Component } from 'react';
import './App.css';

// Import Components
import Navigation from './components/Navigation'
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
        <div className="container-fluid">
          <Navigation/>
          <Header/>
          <About/>
          <Skills/>
          <Portfolio/>
          <Footer/>
        </div> {/* Container */}

      </div>
    );
  }
}

export default App;
