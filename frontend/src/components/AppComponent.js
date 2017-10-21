import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbotron'
import ServiceList from './ServiceList';
import company from '../Mock_Data/companies.json';


class AppComponent extends Component {

  render() {

    return (

      <div className="App">
        <div className="App-header">
          <Navbar />
          <Jumbo />
        </div>
        <div>
          <ServiceList companies={company} />
        </div>
      </div>
    );
  }

}

export default AppComponent;
