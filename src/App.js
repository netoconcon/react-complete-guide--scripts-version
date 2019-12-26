import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState ({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29}
      ],
      otherState: 'other state'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    // console.log('was clicked');
    // this.state.persons[0].name = "Maximilian"; DO NOT DO THIS
    setPersonsState({ 
      persons: [
      { name: 'Maximilan', age: 29},
      { name: 'Manuela', age: 30}
    ],})
  };


    return (
      <div className="App">
        <h1>I am React App</h1>
        <p>This is really working</p>
        <button onClick = {this.switchNameHandler} >Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        
      </div>
    );
  }

export default app;




