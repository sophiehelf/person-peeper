import React from 'react';
import PersonData from './PersonData.js'
import Person from './Person'
import PersonShower from './PersonShower'
import PersonEditor from './PersonEditor'


class PersonList extends React.Component {


	render() {

		return(
			<div id="container">
			{this.props.people.map((person, key) => {
				return <p id="person"><Person key={key} person={person} handleClick={this.props.handleClick} value={person}/></p>
			})}
			</div>
		)
	}
}

export default PersonList;
