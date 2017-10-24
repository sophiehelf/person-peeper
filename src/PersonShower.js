import React from 'react'
import PersonEditor from './PersonEditor'

class PersonShower extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: this.props.person.name.first,
			lastName: this.props.person.name.last,
			picture: this.props.person.picture.large,
			city: this.props.person.location.city,
			theState: this.props.person.location.state
		}
	}


	handleFirstNameChange = (e) => {
		e.preventDefault()
		this.setState({firstName: e.target.value})
		console.log(e.target.value)
	}

	handleLastNameChange = (e) => {
		e.preventDefault()
		this.setState({lastName: e.target.value})
	}

	handleCityChange = (e) => {
		e.preventDefault()
		this.setState({city: e.target.value})
	}

	handleTheStateChange = (e) => {
		e.preventDefault()
		this.setState({theState: e.target.value})
	}


	render() {

		console.log(this.props)

		return(
			<div>
		<div id="person-container"><img src={this.state.picture} alt="person-img"/><br /><br />My name is {this.state.firstName.charAt(0).toUpperCase() + this.state.firstName.slice(1)} {this.props.person.name.last.charAt(0).toUpperCase() + this.props.person.name.last.slice(1)} and I was born in {this.props.person.location.state.charAt(0).toUpperCase() + this.props.person.location.state.slice(1)}. I currently live in {this.props.person.location.city.charAt(0).toUpperCase() + this.props.person.location.city.slice(1)}.<br /><br /> <br />
			<PersonEditor name="person-form" handleFirstNameChange={this.handleFirstNameChange.bind(this)} handleLastNameChange={this.handleLastNameChange.bind(this)} handleCityChange={this.handleCityChange.bind(this)} handleTheStateChange={this.handleTheStateChange.bind(this)} person={this.props.person}/>
		</div>
	</div>
		)
	}
}

export default PersonShower