import React from 'react';
import FormInput from './FormInput';
import Button from './Button';

const SignUpForm = () => (
  <div className="SignUpForm">
    <form>
      <FormInput title="Company Name" onChange={null}/>
      <FormInput title="Password" onChange={null}/>
      <FormInput title="Confirm Password" onChange={null}/>
      <FormInput title="Email" onChange={null}/>
      <FormInput title="Your Service" onChange={null}/>
      <FormInput title="Services Requested" onChange={null}/>
      <Button text="Sign Up" onClick={null}/>
    </form>
  </div>
);

export default SignUpForm;
