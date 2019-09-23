import React from 'react';

class ComponentHeaderLeft extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			// <input type="text" onChange={this.props.handleChange} />
			<p>{this.props.age} {this.props.name}</p>
		);
	}
}

ComponentHeaderLeft.defaultProps = {
	age: 25,
	name: 'john',
}

export default ComponentHeaderLeft;