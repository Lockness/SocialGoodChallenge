import React from 'react';
import Button from './Button';

const CompanyPage = ({company}) => (
  <div className="CompanyPage">
    <div className="company-profile">
      <h2>{company.name}</h2>
    </div>
    <div className="Services">
      <h3>Service</h3>
        <p>{company.service}</p>
    </div>
    <div className="Requested">
      <h3>Requested</h3>
      {company.requested.map((request, index) => (
        <p>{request}</p>
      ))}
    </div>
    <div className="Contact">
      <Button text="Contact" onClick={null} type="button" />
    </div>
  </div>
);

export default CompanyPage;