import React from 'react';
import PersonShower from './PersonShower'


class Person extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: props.person.name.first,
			lastName: props.person.name.last,
			city: props.person.location.city,
			state: props.person.location.state,
			visible: false
		}
	}

	handleClick = () => {
		const data = this.state
		console.log(data)
		this.setState({
			firstName: data.firstName,
			lastName: data.lastName,
			state: data.state,
			city: data.city,
			visible: true
		})
	}

	render() {
		const data = this.state
		return(
			<div>
			<p onClick={this.handleClick} >{this.state.firstName.charAt(0).toUpperCase() + this.state.firstName.slice(1)} {this.state.lastName.charAt(0).toUpperCase() + this.state.lastName.slice(1)}.</p>
			<div id="container">{this.state.visibile? <PersonShower /> : null }</div>
			</div>
		)
	}
}

export default Person;