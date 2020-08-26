import React from 'react';
import logo from './tesla.png';
import './App.css';
import Tesla from './Tesla'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <a
          className="App-link"
          href="https://tesla.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Tesla
        </a>
      </header>
      <Tesla />
    </div>
  );
}

export default App;
