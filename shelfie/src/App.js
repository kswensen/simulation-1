import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import router from './router';


class App extends Component {
  render() {
    return (
      <div className="homeContainer">
        <header className="logoHeader">
          <Link to='/'>
            <img src=''></img>
          </Link>
        </header>
        <button className="shelfButton">
          <Link to='/shelfA'>Shelf A</Link>
        </button>
        <button className="shelfButton">
          <Link to='/shelfB'>Shelf B</Link>
        </button>
        <button className="shelfButton">
          <Link to='/shelfC'>Shelf C</Link>
        </button>
        <button className="shelfButton">
          <Link to='/shelfD'>Shelf D</Link>
        </button>
        { router }
      </div>
    );
  }
}

export default App;
