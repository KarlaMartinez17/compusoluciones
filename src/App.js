import React, { Component } from 'react';
import Form from'./form/Form';
import User from './User/User';
import Admin from './Admin/Admin';


class App extends Component {
  render() {
    return (
      <div className="App">
    
        <User />
      </div>
    );
  }
}



export default App;
