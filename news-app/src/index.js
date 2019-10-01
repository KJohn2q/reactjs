import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import PCIndex from './js/component/pc_index';
import PCNewsDetails from './js/component/pc_news_details';
import MobileIndex from './js/component/mobile_index';
import MobileNewsDetails from './js/component/mobile_news_details';
import MediaQuery from 'react-responsive';
import {BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

const root = document.getElementById('root');

class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)' >
          <Router >
            <Switch>
              <Route path="/details/:docid" component={PCNewsDetails}>
              </Route>
              <Route path="/">
                <PCIndex />
              </Route>
            </Switch>
					</Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)' >
          <Router>
            <Switch>
              <Route path="/details/:docid" component={MobileNewsDetails}>
              </Route>
              <Route path="/" component={MobileIndex}></Route>
            </Switch>
					</Router>
        </MediaQuery>
      </div>
    );
  }
}


ReactDOM.render(<Root />, root);
serviceWorker.unregister();
