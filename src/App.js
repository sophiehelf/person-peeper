import React, { Component } from 'react';
import './App.css';
import PersonData from './PersonData'
import PersonList from './PersonList'
import Person from './Person'
import PersonShower from './PersonShower'

class App extends Component {
  

  render() {
    return (
    	<div>
	      <PersonList />
	     </div>
    )
  }
}

export default App;
