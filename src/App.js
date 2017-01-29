import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Header/>
          <About/>
          <Skills/>
          {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
