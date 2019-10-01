import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
export default class MobileNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
    fetch("http://www.news.com/index.php/index/Index/getNewsDetail?docid=" +
		this.props.match.params.docid,
		myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		});
	};
	createMarkup() {
		return {__html: this.state.newsItem.body};
	};
	render() {
		return (
			<div id="mobileDetailsContainer">
				<MobileHeader></MobileHeader>
				<div className="ucmobileList">
					<Row>
						<Col span={24} className="container">
							<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						</Col>
					</Row>
					<MobileFooter></MobileFooter>
					<BackTop/></div>
			</div>
		);
	};
}
