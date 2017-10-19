import React from 'react';
import PersonData from './PersonData.js'
import Person from './Person'
import PersonShower from './PersonShower'


class PersonList extends React.Component {
	constructor() {
		super();

		this.state = {
			people: PersonData
		}
	}

	handleClick = (data) => {	
		console.log(data)
	}	

	render() {

		return(
			<div id="container">
			{this.state.people.map((person, key) => {
				return <Person key={key} person={person} handleClick={this.handleClick} />
			})}
			</div>
		)
	}
}

export default PersonList;
