import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';

// const { SubMenu } = Menu;

class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
    };
  }

  render() {
    return(
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={require('../../images/logo.png')} alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu selectedKeys={[this.state.current]} mode="horizontal" >
              <Menu.Item key="top" >
                <Icon type="appstore" />
                头条
              </Menu.Item>
              <Menu.Item key="entertainment">
                <Icon type="appstore" />
                娱乐
              </Menu.Item>
              <Menu.Item key="military">
                <Icon type="appstore" />
                军事
              </Menu.Item>
              <Menu.Item key="automobile">
                <Icon type="appstore" />
                汽车
              </Menu.Item>
              <Menu.Item key="finance">
                <Icon type="appstore" />
                财经
              </Menu.Item>
              <Menu.Item key="joke">
                <Icon type="appstore" />
                笑话
              </Menu.Item>
              <Menu.Item key="sport">
                <Icon type="appstore" />
                体育
              </Menu.Item>
              <Menu.Item key="technology">
                <Icon type="appstore" />
                科技
              </Menu.Item>
                <Menu.Item key="emotion">
                <Icon type="appstore" />
                感情
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}

export default PCHeader;
