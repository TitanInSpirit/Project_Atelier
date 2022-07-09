import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Sidebar from './Sidebar.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props), (this.state = {});
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

export default Overview;
