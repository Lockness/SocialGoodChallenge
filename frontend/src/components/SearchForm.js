import React from 'react';
import FormInput from './FormInput';
import FormRadioButtons from './FormRadioButtons';
import Button from './Button';

const SearchForm = () => (
  <div className="SearchForm">
    <form>
      <FormInput title="Company Name" onChange={null}/>
      <FormRadioButtons title="Services" services={["Financial", "Marketing", "Legal", "Design"]} onChange={null}/>
      <Button text="Submit" onClick={null}/>
    </form>
  </div>
);

export default SearchForm;
