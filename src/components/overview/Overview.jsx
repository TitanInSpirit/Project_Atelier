import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Sidebar from './Sidebar.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props), (this.state = {});
  }

  testRequestHandler(event) {
    let request = event.target;

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <ImageGallery />
        <Sidebar />
      </div>
    );
  }
}
//
export default Overview;
