import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      czas: 0,
      interwal: null
    };
  }
  
  aktualizujCzas = () => {
    this.setState({czas: this.state.czas + 1});
  }

  start = () => {
    if (this.state.interwal === null) {
    this.setState({interwal: setInterval(this.aktualizujCzas, 1000)})
    }
  }

  stop = () => {
    clearInterval(this.state.interwal);
  }

  reset = () => {
    this.stop();
    this.setState({czas: 0, interwal: null});
  }

  render() {
    return (
      <div>
        <div>Czas:  {this.state.czas}</div>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
