import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Sidebar from './Sidebar.jsx';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props), (this.state = {});
  }

  testRequestHandler(event) {
    let request = event.target[0].value;

    axios.get(`http://localhost:3002/${request}`)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <ImageGallery />
        <Sidebar testRequestHandler={this.testRequestHandler}/>
      </div>
    );
  }
}
//
export default Overview;
