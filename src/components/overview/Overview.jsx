import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Sidebar from './Sidebar.jsx';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props), (this.state = {});
  }

  testRequestHandler(event) {
    let request = event.target;
    axios.get(`http://localhost:3002/${request}`)
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <ImageGallery />
        <Sidebar testRequestHandler={testRequestHandler}/>
      </div>
    );
  }
}
//
export default Overview;
