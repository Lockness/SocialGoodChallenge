import React from 'react';

const Button = ({text, onClick, type="submit" }) => (
  <div className="ToggleButton">
    <button type={type} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Button;