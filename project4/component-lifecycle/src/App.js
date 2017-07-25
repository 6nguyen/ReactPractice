import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component Lifecycle</h2>
        </div>
        <Body />
      </div>
    );
  }
}

// Step 1:  Create a Body component to replace the App component intro with a button
  // to generate a random number.
  // Step 2:  Create a constructor to bind the onClick event
  // Step 5:  Set the value of this.state.random
class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      random: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  //
  getRandomNumber() {
    console.log("getRandomNumber() called");
    this.setState(
      {random: Math.floor(Math.random()*100)}
    );
  }

  // Step 4:  Render the random number as a prop of this component
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>
          Random Number
        </button>
        <br/><br/>
        <Numbers myNumber = {this.state.random}/>
      </div>
    );
  }
}

// Step 3:  Create a Numbers component to store the random Number
// Step 6:  Add number generated in Body
class Numbers extends Component {
  render(){
    return(
      <div>
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
