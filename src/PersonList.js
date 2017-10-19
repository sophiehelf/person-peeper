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
			<div id="container">
			<ul>{this.state.people.map((person, key) => {
				return <li key={key}>"My name is {person.name.first} {person.name.last}. I am from {person.location.state} and currently reside in {person.location.city}."</li>
			})}</ul>
			<p>{this.state.people[Math.floor(Math.random() * this.state.people.length)].name.first} steps forward and extends {this.state.people[Math.floor(Math.random() * this.state.people.length)].gender === "female" ? "her" : "his"} hand.</p>
			</div>
		)
	}
}

export default PersonList;
