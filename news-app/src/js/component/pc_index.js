import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import '../../css/pc.css';  

class PCIndex extends React.Component {
  render() {
    return(
      <div>
        <PCHeader />
        <PCFooter />
      </div>
    );
  }
}

export default PCIndex;
