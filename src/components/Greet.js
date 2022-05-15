import React, { useState } from "react";

// function Greet(){
//     return <h1>Hello Rohit</h1>
// }

const Greet = (props) => {
	console.log(props, props.children);
	return (
		<div className="greet-component">
			<h1>
				Hello {props.name} a.k.a {props.heroName}
			</h1>
            {props.children}
		</div>
	);
};

export default Greet;
