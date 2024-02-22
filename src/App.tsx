import React from 'react';
import logo from './logo.svg';
import flowkat_bingbing from './flowkat_bingbing.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <img src={flowkat_bingbing} alt="영업중" />

      </header>
    </div>
  );
}

export default App;
