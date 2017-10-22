import React from 'react';

const MemberPage = ({companies}) => (
  <div className="MemberPage">
    <h2>Our Proud Members</h2>
    <div className="member-list">
      <ul>
        {companies.map((company, index) => (
          <li key={index} >{company.name}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default MemberPage;