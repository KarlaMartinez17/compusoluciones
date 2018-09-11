import React, { Component } from 'react';
import Form from'./form/Form';
import User from './User/User.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Form />
      <User />
      
      </div>
    );
  }
}

export default App;
