import React from 'react';

const FormRadioButtons = ({title, onChange, services}) => (
  <div className={title + "-div"}>
    <label className="form-label">{title}</label>
    <ul>
      {services.map((service, index) => (
        <div key={index}>
        <input type="radio" name={service} onChange={onChange}  />
        <label className="form-label" >{service}</label>
        </div>
      ))}
    </ul>
  </div>
);

export default FormRadioButtons;
