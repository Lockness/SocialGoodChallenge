import {Component} from 'react';
import React from 'react';
import axios from 'axios';

class MemberPage extends Component {

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
    return (
      <div className="MemberPage">
        <h2>Our Proud Members</h2>
        <div className="member-list">
          <ul>
            {this.state.companies.map((company, index) => (
              <li key={index}>{company.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

}

export default MemberPage;
