import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom';

class PCNewsBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      news: '',
    }
  }

  componentWillMount() {
    var myFetchOptions = {
      method: 'GET',
      mode: 'cors',
    };
    fetch("http://www.news.com/index.php/index/Index/getNewsList?type="
    + this.props.type , myFetchOptions).then(response =>
      response.json()).then(json => this.setState({news: json}));
  }

  render() {
    const {news} = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <li key={index}>
          <Link to={`details/${newsItem.docid}`} target="_blank">
            {newsItem.title}
          </Link>
        </li>
      ))
      : '没有加载到任何新闻';
    return(
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    );
  }
}

export default PCNewsBlock;
