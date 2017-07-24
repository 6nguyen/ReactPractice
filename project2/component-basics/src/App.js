import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.favAnimal = "Mantis Shrimp"
    this.state = {};
  }

  greeting(name){
    return "How's it going " + name;
  }

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
