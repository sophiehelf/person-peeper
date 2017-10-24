import React from 'react'


class PersonEditor extends React.Component {
	constructor(props) {
		super(props)



		this.state = {
			firstName: this.props.person.firstName,
			lastName: this.props.person.lastName,
			city: this.props.person.city,
			state: this.props.person.theState
		}

	}

	


	render() {

		return(
			<div>
				<form name="person-form" onSubmit={this.props.handleInputChange}>
					 <label>
					 First Name: <input type="text" name="firstName" value={this.props.firstName} onChange={this.props.handleFirstNameChange}/>
					 </label>
					 <br />
					 <label> 
					 Last Name: <input type="text" name="lastName" value={this.props.lastName} onChange={this.props.handleLastNameChange}/>
					 </label>
					 <br />
					 <label>
					 City: <input type="text" name="city" value={this.props.city} onChange={this.props.handleCityChange}/>
					 </label>
					 <br />
					 <label>
					 State: <input type="text" name="theState" value={this.props.theState} onChange={this.props.handleTheStateChange}/>
					 </label>
				</form>
			</div>
		)
	}
}

export default PersonEditor;