import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Menu,Icon,message,Button} from 'antd';
import LoginModal from './login_modal';

class MobileHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0
    };
  }

  setModalVisible(value) {
    this.setState({modalVisible: value});
  }

  login() {
    this.setState({modalVisible: true});
  }

  render() {
    const userShow = this.state.hasLogined?
    <Router>
      <Link target="_blank" to="">
        <Icon type="inbox"/>
        <Button type="dashed" htmlType="button">个人中心</Button>
      </Link>
    </Router>
    :
    <Icon type="setting" onClick={this.login.bind(this)} />
    return(
    	<div id="mobileheader">
    		<header>
    			<img src={require('../../images/logo.png')} alt="logo" />
    			<span>ReactNews</span>
          {userShow}
          <LoginModal modalVisible = {this.state.modalVisible}
            setModalVisible = {this.setModalVisible.bind(this)} />
    		</header>
    	</div>
    );
  }
}

export default MobileHeader;
