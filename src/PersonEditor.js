import React from 'react'


class PersonEditor extends React.Component {
	constructor(props) {
		super(props)	

	}

	handleChange = (e) => {
		e.preventDefault;
		console.log(this.props)
	}

	render() {

		return(
			<form onSubmit={this.props.handleSubmit} />
		)
	}
}

export default PersonEditor;