import React from 'react';
import PersonData from './PersonData.js'


class PersonList extends React.Component {
	constructor() {
		super();

		this.state = {
			people: PersonData
		}
	}

	render() {
		console.log(this.state)
		return(
			<ul>{this.state.people.map((person, key) => {
				return <li key={key}>My name is {person.name.first} {person.name.last}. I am from {person.location.state} and currently reside in {person.location.city}.</li>
			})}</ul>
		)
	}
}

export default PersonList;
