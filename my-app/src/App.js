import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hii i'm react app</h1>
        <Person name="Max" age="28"></Person>
        <Person name="manu" age="29">My Hobbies : racing</Person>
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1',null,'Does this work now'))
  }
}

export default App;
