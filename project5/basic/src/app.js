import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Creating my React App from scratch!</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
