import React from 'react';
import FormInput from './FormInput';
import Button from './Button';

const LoginForm = ({logIn}) => (
  <div className="LoginForm">
    <form>
      <FormInput title="Company ID" onChange={null}/>
      <FormInput title="Password" onChange={null}/>
      <Button text="Submit" onClick={logIn} type="button"/>
    </form>
  </div>
);

export default LoginForm;