import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Default Component displays React animation, header, and into
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Parent />
        <h3>propObject is: {this.props.propObject.text1}</h3>
        <h3>propString is: {this.props.propString}</h3>
        <h3>propInt is: {this.props.propInt}</h3>
        <h3>propArray is: {this.props.propArray.map((item) => {return item + ", "})}</h3>
      </div>
    );
  }
}

// We can assign types to props along with .isRequired
App.propTypes = {
  propObject: React.PropTypes.object,
  propString: React.PropTypes.string.isRequired,
  propInt: React.PropTypes.number,
  propFunction: React.PropTypes.func,
  propArray: React.PropTypes.array,
}

// Defining App props with App.defaultProps
App.defaultProps = {
  propObject: {
    text1: "1st object string",
    text2: "2nd object string"
  },
  propString: "This is a string, it's also a required prop",
  propInt: 23,
  propArray: ["Cat", "dog", "mouse"],
}


// Parent component that Displays the child component
// We create our default State in our constructor!
  // Whenever the class is used, the first thing triggered is the constructor, so
  // setting the state there is a good idea
class Parent extends Component {
  constructor(props){
    super(props);

    // used to set the default state, like in .defaultProps
    this.state = {
      cars: ["state-Honda", "state-BMW", "state-Nissan", "state-Toyota"]
    };
    // Syntactical sugar: You must always bind the click event
      // you can also bind in render: <h2 onClick={this.handleClick.bind(this)>}
    this.handleClick = this.handleClick.bind(this);
  }

  // reverses the order of array cars created in Parent constructor
  handleClick() {
    this.setState(
      {cars: this.state.cars.reverse()}
    );
  }

  render(){
    return(
      <div>
        <h2>This is a parent component.</h2>
        <button onClick={this.handleClick}  >
          Reverse Cars
        </button>
        <Child  message="This is the parent's prop, accessed from the child!"
               model="9999"
               myCars={this.state.cars} />
      </div>
    );
  }
}


// We can set Parent components default props after it is created
Parent.defaultProps = {
  cars: ["Honda", "BMW", "Nissan"]
}

// Child component accesses Parent's props
class Child extends Component {
  render(){
    console.log(this.props);

    return(
      <div>
        <h3>I am from the child component, but being called from the Parent</h3>
        <p>{this.props.message}</p>
        <p>{this.props.model}</p>
        <div>
          {this.props.myCars.map(
              (item, i) => {return <p key={i}> {item} </p>;}
          )}
        </div>
      </div>
    );
  }
}

export default App;
