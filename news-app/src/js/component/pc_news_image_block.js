import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
class PCNewsImageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: '',
      count: this.props.count?this.props.count:20
    };
  }

  componentWillMount() {
    var myFetchOptions = {
      method: 'GET',
      mode: 'cors',
    };
    fetch("http://www.news.com/index.php/index/Index/getNewsList?type="
    + this.props.type + "&count=" + this.state.count, myFetchOptions).then(response =>
      response.json()).then(json => this.setState({news: json}));
  }

  render() {
    const styleImage = {
      display: 'block',
      width: this.props.imageWidth,
      height: '90px'
    };
    const styleH3 = {
      width: this.props.imageWidth,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    };
    const {news} = this.state;
    const newsList = news.length
      ? news.map((newsItem, id) => (
        <div key={id} className="imageblock">
          <Link to={`details/${newsItem.docid}`} target="_blank">
            <div className="custom-image">
              <img alt="" style={styleImage} src={newsItem.imgsrc}/>
            </div>
            <div className="custom-card">
              <h3 style={styleH3}>{newsItem.title}</h3>
              <p>{newsItem.source}</p>
            </div>
          </Link>
        </div>
      ))
      : '没有加载到任何新闻';
      return (
        <div className="topNewsList">
          <Card title={this.props.cartTitle} bordered={true} style={{
            width: this.props.width
          }}>
            {newsList}
          </Card>
        </div>
      );
  };
}
export default PCNewsImageBlock;
