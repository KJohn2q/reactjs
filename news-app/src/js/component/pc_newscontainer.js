import React from 'react';
import {Row, Col} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCProduct from './pc_products';
import PCNewsImageBlock from './pc_news_image_block';
import {Tabs,Carousel} from 'antd';
const {TabPane} = {Tabs};

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
                  <div className="name"></div>
                </Carousel>
              </div>

            </div>
            <Tabs class="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
            <Tabs class="tabs_product">
							<TabPane tab="ReactNews 产品" key="1">
								<PCProduct/>
							</TabPane>
						</Tabs>
            <div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>
          </Col>

          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default PCNewsContainer;
