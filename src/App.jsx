import logo from './logo.svg';
import './App.css';
import React from "react";
import { HashRouter} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Here is successful deployed project</h1>
        </header>
      </div>
  );
}

export default App;
