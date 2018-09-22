import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      { name : 'Max',age:29 },
      { name : 'manu', age : 29}
    ],
    otherState: 'some other value'

  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    this.setState({
      persons:[
        { name : 'newName', age: 28},
        { name : 'manu', age : 29},
        { name : 'steph',age : 27}
    ]
  })
}

 nameChangehandler = (event) => {
   this.setState({
    persons:[
      { name : 'Max', age: 28},
      { name : event.target.value, age : 29},
      { name : 'steph',age : 27}
  ]
   })
 }
  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding : '8px',
    };

    return (
      <div className="App">
        <h1>hii i'm react app</h1>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'max')} changed={this.nameChangehandler} >My Hobbies : racing</Person>
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1',null,'Does this work now'))
  }
}

export default App;
