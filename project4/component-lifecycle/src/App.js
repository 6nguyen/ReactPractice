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
  // Step 7:  Create method to generate a random number between 0 - 99
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
// Step 8:  Create componentWillMount and componentDidMount funcs
  // order you place fun doesn't matter, they will call themselves in correct order
// Step 9:  Create componentWillReceiveProps.  Only calls when comp receives a prop
class Numbers extends Component {

  componentWillMount() {
    console.log("componentWillMount called");
  }

  render(){
    return(
      <div>
        {this.props.myNumber}
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps called");
  }

  shouldComponentUpdate(newProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true;
  }

  componentWillUpdate(newProps, nextState) {
    console.log("componentWillUpdate called");
  }

  componentDidUpdate(newProps, nextState) {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
}


export default App;
