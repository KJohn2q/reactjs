import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import '../../css/mobile.css';
import { Tabs, Icon } from 'antd';

const { TabPane } = Tabs;

class MobileIndex extends React.Component {
  render() {
    return(
      <div>
        <MobileHeader />
        <Tabs>
        	<TabPane
		      tab={
		  		<span>
		          <Icon type="apple" />
		          头条
		        </span>
		      }
		      key="1"
		    >
		    Tab 1
    		</TabPane>
		    <TabPane
		      tab={
		        <span>
		          <Icon type="apple" />
		          娱乐
		        </span>
		      }
		      key="2"
		    >
		    Tab 1
    		</TabPane>
		    <TabPane
		      tab={
		        <span>
		          <Icon type="apple" />
		          军事
		        </span>
		      }
		      key="3"
		    >
		    Tab 1
    		</TabPane>
		    <TabPane
		      tab={
		        <span>
		          <Icon type="apple" />
		          汽车
		        </span>
		      }
		      key="4"
		    >
		    Tab 1
    		</TabPane>
		    <TabPane
		      tab={
		        <span>
		          <Icon type="apple" />
		          财经
		        </span>
		      }
		      key="5"
		    >
		    Tab 1
    		</TabPane>
		    <TabPane
		      tab={
		        <span>
		          <Icon type="apple" />
		          笑话
		        </span>
		      }
		      key="6"
		    >
		    Tab 1
    		</TabPane>
		    <TabPane
		      tab={
		        <span>
		          <Icon type="apple" />
		          体育
		        </span>
		      }
		      key="7"
		    >
		    Tab 1
    		</TabPane>
		    <TabPane
		      tab={
		        <span>
		          <Icon type="apple" />
		          科技
		        </span>
		      }
		      key="8"
		    >
		    Tab 1
    		</TabPane>
		    <TabPane
		      tab={
		        <span>
		          <Icon type="apple" />
		          感情
		        </span>
		      }
		      key="9"
		    >
		    Tab 1
    		</TabPane>
        </Tabs>
        <MobileFooter />
      </div>
    );
  }
}

export default MobileIndex;
