import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import {Menu,Icon,Button} from 'antd';
import LoginModal from './login_modal';

class PCHeader extends React.Component {
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

  handleClick(e) {
    if (e.key==="register") {
      this.setState({current: 'register', modalVisible: true});
    }
    else {
      this.setState({current: e.key});
    }
  }

  render() {
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" className="register">
          <Button type="primary" htmlType="button">
            {this.state.userNickName}
          </Button>
          &nbsp;&nbsp;
          <Link target="_blank">
            <Button type="dashed" htmlType="button">个人中心</Button>
          </Link>
          &nbsp;&nbsp;
          <Button type="ghost" htmlType="button">退出</Button>
        </Menu.Item>
      : <Menu.Item key="register" className="register">
        <Icon type="appstore"/>注册/登录
      </Menu.Item>
    return (<header>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <a href="/" className="logo">
            <img src={require('../../images/logo.png')} alt="logo"/>
            <span>ReactNews</span>
          </a>
        </Col>
        <Col span={16}>
          <Menu selectedKeys={[this.state.current]}
            mode="horizontal" onClick={this.handleClick.bind(this)}>
            <Menu.Item key="top">
              <Icon type="appstore"/>
              头条
            </Menu.Item>
            <Menu.Item key="entertainment">
              <Icon type="appstore"/>
              娱乐
            </Menu.Item>
            <Menu.Item key="military">
              <Icon type="appstore"/>
              军事
            </Menu.Item>
            <Menu.Item key="automobile">
              <Icon type="appstore"/>
              汽车
            </Menu.Item>
            <Menu.Item key="finance">
              <Icon type="appstore"/>
              财经
            </Menu.Item>
            <Menu.Item key="joke">
              <Icon type="appstore"/>
              笑话
            </Menu.Item>
            <Menu.Item key="sport">
              <Icon type="appstore"/>
              体育
            </Menu.Item>
            <Menu.Item key="technology">
              <Icon type="appstore"/>
              科技
            </Menu.Item>
            <Menu.Item key="education">
              <Icon type="appstore"/>
              教育
            </Menu.Item>
            <Menu.Item key="emotion">
              <Icon type="appstore"/>
              感情
            </Menu.Item>
            <Menu.Item key="fashion">
              <Icon type="appstore"/>
              时尚
            </Menu.Item>
            {userShow}
          </Menu>
          <LoginModal modalVisible = {this.state.modalVisible}
            setModalVisible = {this.setModalVisible.bind(this)} />
        </Col>
        <Col span={2}></Col>
      </Row>
    </header>);
  }
}

export default PCHeader;
