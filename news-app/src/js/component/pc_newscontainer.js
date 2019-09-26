import React from 'react';
import {Row, Col} from 'antd';

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
                    <img src={require('../../images/course1.jpeg')} alt="course1" />
                  </div>
                  <div>
                    <img src={require('../../images/course2.jpeg')} alt="course2" />
                  </div>
                  <div>
                    <img src={require('../../images/course3.jpeg')} alt="course3" />
                  </div>
                  <div>
                    <img src={require('../../images/course4.jpeg')} alt="course4" />
                  </div>
                  <div className="name"></div>
                </Carousel>
              </div>

            </div>
          </Col>

          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default PCNewsContainer;
