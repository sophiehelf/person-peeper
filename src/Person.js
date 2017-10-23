import React from 'react';
import PersonShower from './PersonShower'
import PersonEditor from './PersonEditor'


class Person extends React.Component {
	render() {
		return(
			<div onClick={ () => this.props.handleClick(this.props.person)}>
			<p>{this.props.person.name.first.charAt(0).toUpperCase() + this.props.person.name.first.slice(1)} {this.props.person.name.last.charAt(0).toUpperCase() + this.props.person.name.last.slice(1)}</p>
			</div>
		)
	}
}

export default Person;

// {this.state.visibile? <PersonShower /> : null }