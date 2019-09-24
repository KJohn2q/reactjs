import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import PCIndex from './js/component/pc_index';
import MediaQuery from 'react-responsive';

const root = document.getElementById('root');
let mainComponent = <PCIndex />;  // 显示主控件

class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)' >
          {mainComponent}
        </MediaQuery>
      </div>
    );
  }
}


ReactDOM.render(<Root />, root);
serviceWorker.unregister();
