import React, { Component } from 'react';
import Navbar from './Navbar';
import ServiceList from './ServiceList';
import company from '../Mock_Data/companies.json';


class AppComponent extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
          <h1>Welcome to SocialServe</h1>
        </div>
        <div>
          <ServiceList companies={company} />
        </div>
      </div>
    );
  }

}

export default AppComponent;
