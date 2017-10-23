import React from 'react'
import PersonEditor from './PersonEditor'

class PersonShower extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit() {
		this.setState({
			
		})
	}

	render() {

		return(
			<div>
		<div id="person-container"><img src={this.props.person.picture.large} alt="person-img"/><br /><br />My name is {this.props.person.name.first.charAt(0).toUpperCase() + this.props.person.name.first.slice(1)} {this.props.person.name.last.charAt(0).toUpperCase() + this.props.person.name.last.slice(1)} and I was born in {this.props.person.location.state.charAt(0).toUpperCase() + this.props.person.location.state.slice(1)}. I currently live in {this.props.person.location.city.charAt(0).toUpperCase() + this.props.person.location.city.slice(1)}.<br /><br /> <br /><PersonEditor name="person-form" person={this.props.person}/></div>
		</div>
		)
	}
}

export default PersonShower