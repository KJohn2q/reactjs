import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import User from './User';
// import Clock from './Clock';
// import Comment from './Comment';
// import Student from './Welcome';
// import ActionLink from './ActionLink';
// import Toggle from './Toggle';
// import LoggingButton from './LoggingButton';
// import LoginControl from './LoginControl';
import TempCalc from './TempCalc';
import * as serviceWorker from './serviceWorker';

const comment = {
	'avatarUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568724993565&di=1ac8bcda2216af94a98045ba0a5b9a89&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20180806%2Fxinnianjianzhifuzi_9599977.jpg',
	'name': 'john'
};

const text = 'Have a good time !!!';

ReactDOM.render(<TempCalc />, document.getElementById('root'));
// ReactDOM.render(<Comment user={comment} text={text}/>, document.getElementById('root'));
// ReactDOM.render(<Clock />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
