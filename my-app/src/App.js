import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      { name : 'Max',age:29 },
      { name : 'manu', age : 29}
    ],
    otherState: 'some other value', 
    showPersons : false

  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    this.setState({
      persons:[
        {id: 'a', name : 'newName', age: 28},
        {id: 'b', name : 'manu', age : 29},
        {id: 'c', name : 'steph',age : 27}
    ]
  })
}

 nameChangehandler = (event,id) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
   });
   const person = {
     ... this.state.persons[personIndex]
   };

   person.name = event.target.value;
   const persons = [...this.state.persons];
   persons[personIndex] = person;
   this.setState({persons: persons})
  }
 

 deletePersonHandler = (personIndex) => {
   //const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
  //  const persons = this.state.persons;
   persons.splice(personIndex,1);
   this.setState({persons: persons})
 }

 togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});

 }
  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding : '8px',
    };

    let persons  = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person,index) => {
          return <Person 
          click =  {() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed = {(event) =>this.nameChangehandler(event,person.id)}/>
        })}
        </div> 
      );

    }

    return (
      <div className="App">
        <h1>hii i'm react app</h1>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1',null,'Does this work now'))
  }
}

export default App;
