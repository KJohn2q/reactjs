import React from 'react';
import {Modal,Tabs,Form,Input,Button,message} from 'antd';

const FormItem = Form.Item;

const { TabPane } = Tabs;

class LoginModal extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    // 页面开始向API进行提交数据
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    fetch("https://www.baidu.com").then(response=>response.json()).then(json=>{
      this.setState({userNickName:json.NickUserName,userid:json.UserId});
    });
    message.success("请求成功! ");
    this.props.setModalVisible(false);
  }

  render() {
    let {getFieldProps} = this.props.form;
    return(
      <div>
        <Modal title="用户中心" wrapClassName="vertical-center-modal"
          visible={this.props.modalVisible}
          onCancel= {()=>this.props.setModalVisible(false)}
          onOk={()=>this.props.setModalVisible(false)}
          okText='关闭' cancelText='取消' >
          <Tabs type="card">
            <TabPane tab="注册" key="2">
              <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  <Input placeholder="请输入您的账号"
                    {...getFieldProps('r_userName')} />
                </FormItem>
                <FormItem label="密码">
                  <Input type="password" placeholder="请输入您的密码"
                    {...getFieldProps('r_password')} />
                </FormItem>
                <FormItem label="确认密码">
                  <Input type="password" placeholder="请再次输入您的密码"
                    {...getFieldProps('r_confirmPassword')} />
                </FormItem>
                <Button type="primary" htmlType="submit">注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}

export default LoginModal = Form.create({})(LoginModal)
