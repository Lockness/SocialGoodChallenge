import React, { Component } from 'react';

class AppComponent extends Component {

  componentWillReceiveProps(props) {
    console.log(this.props.testt);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to SocialServe</h1>
        </div>
      </div>
    );
  }
}

export default AppComponent;
