import React, { Component } from 'react';
import './App.css';
import PersonData from './PersonData'
import PersonList from './PersonList'
import Person from './Person'
import PersonShower from './PersonShower'

class App extends Component {
  constructor() {
  	super();
  	this.state = {
			people: PersonData,
			selectedPerson: PersonData[0]
		}
  }

  handleClick = (personObject) => {
  	this.setState({
  		selectedPerson: personObject
  	})
  }

  render() {
  	console.log(this.state)
    return (
    	<div>
	      <PersonList people={this.state.people} handleClick={this.handleClick}/>
	      <PersonShower person={this.state.selectedPerson}/>
	     </div>
    )
  }
}

export default App;
