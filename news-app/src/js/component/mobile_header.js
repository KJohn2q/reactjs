import React from 'react';

class MobileHeader extends React.Component {
  render() {
    return(
    	<div id="mobileheader">
    		<header>
    			<img src={require('../../images/logo.png')} alt="logo" />
    			<span>ReactNews</span>
    		</header>
    	</div>
    );
  }
}

export default MobileHeader;
