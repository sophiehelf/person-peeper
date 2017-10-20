import React from 'react'

const PersonShower = (props) => {


	console.log(props)
	const img = props.person.picture.large
	
	return (
		<div>
		<p id="person-container"><img src="img" />My name is {props.person.name.first.charAt(0).toUpperCase() + props.person.name.first.slice(1)} {props.person.name.last.charAt(0).toUpperCase() + props.person.name.last.slice(1)} and I was born in {props.person.location.state.charAt(0).toUpperCase() + props.person.location.state.slice(1)}. I currently live in {props.person.location.city.charAt(0).toUpperCase() + props.person.location.city.slice(1)}.</p>
		</div>
	)
}

export default PersonShower