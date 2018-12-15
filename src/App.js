import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import Wallpaper from './components/Wallpaper/Wallpaper';
import Quote from './components/Quote/Quote';
import Mantra from './components/Mantra/Mantra';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallpaper />
        <Clock />
        <Mantra />
        <Quote />
      </div>
    );
  }
}

export default App;
