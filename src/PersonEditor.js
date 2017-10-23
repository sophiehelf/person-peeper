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
					 First Name: <input type="text" name="firstName" onSubmit={this.handleInputChange}/>
					 </label>
					 <br />
					 <label> 
					 Last Name: <input type="text" name="lastName" onSubmit={this.handleInputChange}/>
					 </label>
					 <br />
					 <label>
					 City: <input type="text" name="city" onSubmit={this.handleInputChange}/>
					 </label>
					 <br />
					 <label>
					 State: <input type="text" name="theState" onSubmit={this.handleInputChange}/>
					 </label>
					 <input type="submit" value="Click me"/> 
				</form>
			</div>
		)
	}
}

export default PersonEditor;