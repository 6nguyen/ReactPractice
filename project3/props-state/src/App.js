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
      </div>
    );
  }
}

// Parent component that Displays the child component
class Parent extends Component {
  render(){
    return(
      <div>
        <h2>This is a parent component</h2>
        <Child message="This is the parent's prop, accessed from the child!"
               model="9999"
               myCars={this.props.cars} />
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
        <p>{this.props.myCars.map(
            (item, i) => {return " " + item }
        )}</p>
      </div>
    );
  }
}

export default App;
