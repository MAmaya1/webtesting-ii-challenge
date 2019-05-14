import React from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      balls: 0,
      fouls: 0,
      strikes: 0,
      outs: 0
    }
  }

  countBalls = () => {
    if (this.state.balls === 3) {
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

  countFouls = () => {
    let foulsCount = this.state.fouls;
    foulsCount++;

    let strikesCount = this.state.strikes;
    strikesCount++;

    if (this.state.fouls === 1 && this.state.strikes < 2) {
      this.setState({
        fouls: 0,
        strikes: strikesCount
      })
    } else {
      this.setState({
        fouls: foulsCount
      })
    }
  }

  countStrikes = () => {
    if (this.state.strikes === 2) {
      let outsCount = this.state.outs;
      outsCount++;
      this.setState({
        balls: 0,
        fouls: 0,
        strikes: 0,
        outs: outsCount
      })
    } else {
      let strikesCount = this.state.strikes;
      strikesCount++;
      this.setState({
        strikes: strikesCount
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Baseball</h1>
        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
          fouls={this.state.fouls}
          outs={this.state.outs}
        />
        <Dashboard
          countBalls={this.countBalls}
          countFouls={this.countFouls}
          countStrikes={this.countStrikes}
        />
      </div>
    );
  }
}

export default App;