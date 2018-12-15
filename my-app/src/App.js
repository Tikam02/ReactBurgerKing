import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from  './ErrorBoundary/ErrorBoundary';

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
     ...this.state.persons[personIndex]
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
    let btnClass = '';
    let persons  = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}><Person 
          click =  {() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          changed = {(event) => this.nameChangehandler(event,person.id)}/>
          </ErrorBoundary>
        })}
        </div> 
      );  
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    } 
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    
    return (
      <div className={classes.App}>
        <h1>hii i'm react app</h1>
        <p className={assignedClasses.join(' ')}>This is really Working!!</p>
        <button  className={btnClass} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div',null,React.createElement('h1',null,'Does this work now'))
  }
}

export default App;
