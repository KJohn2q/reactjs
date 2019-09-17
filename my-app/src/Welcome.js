import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Student() {
	return (
		<div>
			<Welcome name='black' />
			<Welcome name='Tom' />
			<Welcome name='Zara' />
		</div>		
	);
}

export default Student;