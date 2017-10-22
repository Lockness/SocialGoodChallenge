import React from 'react';
import ServiceList from "./ServiceList";

const DashboardPage = ({companies}) => (
  <div className="DashboardPage">
    <h2>Your dashboard</h2>
    <div className="service-lists">
      <span>
        <div className="requested-services">
          <label>Companies to Help</label>
          <ServiceList companies={companies}/>
        </div>
        <div className="requesting-services">
          <label>Companies Requesting Your Help</label>
          <ServiceList companies={companies}/>
        </div>
      </span>
    </div>
  </div>
);

export default DashboardPage;