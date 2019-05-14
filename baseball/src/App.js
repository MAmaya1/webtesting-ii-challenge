import React from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      balls: 0,
      strikes: 0,
      outs: 0
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Baseball</h1>
        <Display
          balls = {this.state.balls}
          strikes = {this.state.strikes}
          outs = {this.state.outs}
        />
        <Dashboard
          
        />
      </div>
    );
  }
}

export default App;