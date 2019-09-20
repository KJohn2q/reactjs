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
// import Show from './Test';
// import TempCalc from './TempCalc';
import Game from './game/Game';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
// ReactDOM.render(<Comment user={comment} text={text}/>, document.getElementById('root'));
// ReactDOM.render(<Clock />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
