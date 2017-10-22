import React from 'react';

const FormDropdown = ({title, onChange, services}) => (
  <div className={title + "-div"}>
    <label className="form-label">{title}</label>
    <select>
      {services.map((service, index) => (
        <option value={service} onChange={onChange}>{service}</option>
      ))}
    </select>
  </div>
);

export default FormDropdown;
