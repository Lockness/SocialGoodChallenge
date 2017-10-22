import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class ResultsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {'companies': []};
  }

  componentDidMount() {
    console.log(this.state);
    const baseURL = 'http://localhost:3001/company/';

    axios.get(baseURL)
      .then(res => {
        this.setState({'companies': res.data.companies});
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="Results">
        <ul>
          {this.state.companies.map((company, index) => (
            <li key={index}>{company.name} - {company.service}</li>
          ))}
        </ul>
      </div>
    )
  }

}

export default ResultsPage;
