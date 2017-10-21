import React from 'react';

const Results = ({companies}) => (
  <div className="Results">
    <ul>
      {companies.map((company) => (
        <li>{company.name} - {company.service}</li>
      ))}
    </ul>
  </div>
);

export default Results;
