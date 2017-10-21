import React from 'react';

const ServiceList = ({companies}) => (
  <div className="ServiceList">
    <ul>
      {companies.map((company) => (
        <li>{company.name} - {company.service}</li>
      ))}
    </ul>
  </div>
);

export default ServiceList;