import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbotron'

class AppComponent extends Component {

  componentWillReceiveProps(props) {
    console.log(this.props.testt);
  }

  render() {

    return (

      <div className="App">
        <div className="App-header">
          <Navbar />
          <Jumbo />
        </div>
      </div>
    );
  }
}

export default AppComponent;
