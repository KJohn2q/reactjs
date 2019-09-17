import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
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

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user} />
      <div className="Comment-text">
        {props.text}
      </div>
    </div>
  );
}

function Avatar(props) {
	return (<img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />);
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
		    <Avatar user={props.user} />
		    <div className="UserInfo-name">
		      {props.user.name}
		    </div>
	  </div>
	);	
} 

const comment = {
	'avatarUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568724993565&di=1ac8bcda2216af94a98045ba0a5b9a89&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20180806%2Fxinnianjianzhifuzi_9599977.jpg',
	'name': 'john',
}


ReactDOM.render(<App />, document.getElementById('root'));
/*ReactDOM.render(
  <h1>Hello, world!!!!</h1>,
  document.getElementById('root')
);*/
/*const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
	element,
	document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
