import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // typical constructor can create values
  // rcon + tab shortcut
  constructor(props){
    super(props);
    this.favAnimal = "Mantis Shrimp"
    this.state = {};
  }

  // We can create functions before the render func
  // we can call this during render using this.greeting(someName)
  greeting(name){
    return "How's it going " + name;
  }

  // render func decides what parts of the component to display
  // Can use js expressions and functions
  render() {
    const firstName = "George"
    return (
      <div className="App">
        <h3>Hello, my name is {firstName}</h3>
        <h3>5 + 5 = {5+5}</h3>
        <h4>{this.greeting(firstName)}</h4>
        <h4>My favorite animal is: {this.favAnimal}</h4>
      </div>
    );
  }
}

export default App;
