import React, { Component } from 'react';
import './App.css';
import PersonData from './PersonData'
import PersonList from './PersonList'
import Person from './Person'
import PersonShower from './PersonShower'
import PersonEditor from './PersonEditor'

class App extends Component {
  constructor() {
  	super();
  	this.state = {
			people: PersonData,
			selectedPerson: PersonData[0],
			editing: false
		}

  }


  handleClick = (personObject) => {
  	this.setState({
  		selectedPerson: personObject
  	})
  }

  

  componentDidMount() {
  	fetch("https://randomuser.me/api/?results=5")
  	.then(res => res.json())
  	.then(json=> this.setState({
  		people: json.results,
  		selectedPerson: json.results[0]
  	}))
  }

  render() {
    return (
    	<div>
	      <PersonList people={this.state.people} handleClick={this.handleClick}/>
	      <PersonShower person={this.state.selectedPerson}/>
	     </div>
    )
  }
}

export default App;
