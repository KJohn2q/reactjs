import React from 'react';
import ComponentHeaderLeft from './headerLeft.js';

class ComponentHeader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			info: 'hello world!!!',
		}
	}

	handleChange = (e) => {
		this.setState({info: e.target.value});
	}

	render() {
		return (
			<div>
				<h1>this is a header.{this.state.info}</h1>
				<p>{this.props.value}</p>
				<ComponentHeaderLeft {...this.props} handleChange={this.handleChange} />
			</div>
		);
	}
}

export default ComponentHeader;