import React, { Component } from 'react';
import Navbar from './Navbar';

class AppComponent extends Component {

  componentWillReceiveProps(props) {
    console.log(this.props.testt);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
          <h1>Welcome to SocialServe</h1>
        </div>
      </div>
    );
  }
}

export default AppComponent;
