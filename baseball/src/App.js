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
      fouls: 0
    }
  }

  countBalls = () => {
    if (this.state.balls === 4) {
      this.setState({
        balls: 0,
        strikes: 0,
      })
    } else {
      let count = this.state.balls;
      count++;
      this.setState({
        balls: count
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Baseball</h1>
        <Display
          balls = {this.state.balls}
          strikes = {this.state.strikes}
          fouls = {this.state.fouls}
        />
        <Dashboard
          countBalls = {this.countBalls}
        />
      </div>
    );
  }
}

export default App;