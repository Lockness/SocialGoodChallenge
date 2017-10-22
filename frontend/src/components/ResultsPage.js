import React from 'react';
import {Component} from 'react';

class ResultsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {'companies': []};
  }

  componentDidMount() {
    console.log(this.state);
    const baseURL = 'http://localhost:3001/company/search';

    axios.get(baseURL)
      .then(res => {
        this.setState({'companies': res.data.companies});
      });
  }

  render() {
    return (
      <div className="Results">
        <ul>
          {companies.map((company) => (
            <li>{company.name} - {company.service}</li>
          ))}
        </ul>
      </div>
    )
  }

)

}

export default ResultsPage;
