import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import PCIndex from './js/component/pc_index';
import MobileIndex from './js/component/mobile_index';
import MediaQuery from 'react-responsive';
import App from './js/component/show_modal';

const root = document.getElementById('root');

class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)' >
          <PCIndex />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)' >
          <MobileIndex />
        </MediaQuery>
      </div>
    );
  }
}


ReactDOM.render(<Root />, root);
serviceWorker.unregister();
