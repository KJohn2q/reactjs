import React from 'react';
import {Row, Col} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import {Tabs,Carousel} from 'antd';
import PCProduct from './pc_products';
const {TabPane} = Tabs;

class PCNewsContainer extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true
    };

    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div>
                    <img src={require('../../images/carousel_1.jpg')} alt="course1" />
                  </div>
                  <div>
                    <img src={require('../../images/carousel_2.jpg')} alt="course2" />
                  </div>
                  <div>
                    <img src={require('../../images/carousel_3.jpg')} alt="course3" />
                  </div>
                  <div>
                    <img src={require('../../images/carousel_4.jpg')} alt="course4" />
                  </div>
                  <div>
                    <img src={require('../../images/carousel_1.jpg')} alt="course1" />
                  </div>
                </Carousel>
              </div>
              <PCNewsImageBlock type="top" count="9" width="100%" cartTitle="头条新闻" imageWidth="112px"/>
            </div>
            <Tabs className="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCNewsBlock type="top" width="100%" bordered="false"/>
							</TabPane>
              <TabPane tab="娱乐新闻" key="2">
								<PCNewsBlock type="entertainment" width="100%" bordered="false"/>
							</TabPane>
              <TabPane tab="体育" key="3">
								<PCNewsBlock type="sport" width="100%" bordered="false"/>
							</TabPane>
              <TabPane tab="金融" key="4">
								<PCNewsBlock type="finance" width="100%" bordered="false"/>
							</TabPane>
              <TabPane tab="军事" key="5">
								<PCNewsBlock type="military" width="100%" bordered="false"/>
							</TabPane>
              <TabPane tab="科技" key="6">
								<PCNewsBlock type="science" width="100%" bordered="false"/>
							</TabPane>
              <TabPane tab="手机" key="7">
								<PCNewsBlock type="iphone" width="100%" bordered="false"/>
							</TabPane>
              <TabPane tab="数码" key="8">
								<PCNewsBlock type="digital" width="100%" bordered="false"/>
							</TabPane>
              <TabPane tab="时尚" key="9">
								<PCNewsBlock type="fashion" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
            <Tabs className="tabs_product">
							<TabPane tab="ReactNews 产品" key="1">
								<PCProduct />
							</TabPane>
						</Tabs>
            <div>
							<PCNewsImageBlock type="top" width="100%" cartTitle="头条新闻" imageWidth="132px"/>
							<PCNewsImageBlock type="entertainment" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>
          </Col>

          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default PCNewsContainer;
