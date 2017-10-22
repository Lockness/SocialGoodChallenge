import React from 'react';

const FormRadioButtons = ({title, onChange, services}) => (
  <div className={title + "-div"}>
    <label className="form-label">{title}</label>
    <ul>
      {services.map((service) => (
        <div>
        <input type="radio" name={service} onChange={onChange} />
        <label className="form-label">{service}</label>
        </div>
      ))}
    </ul>
  </div>
);

export default FormRadioButtons;
