import React from 'react'

const PersonShower = (props) => {

	
	return(
		<div id="results">
		<p>Hi, my name is {props.firstName} {props.lastName}. I was born in {}and currently live in ____. </p>
		</div>
	)
}

export default PersonShower