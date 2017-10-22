import React from 'react';
import FormInput from './FormInput';
import FormRadioButtons from './FormRadioButtons';
import Button from './Button';
import {withRouter} from "react-router-dom";


const SearchForm = () => (
  <div className="SearchForm">
    <form>
      <FormInput title="Company Name" onChange={null}/>
      <FormRadioButtons title="Services" services={["Financial", "Marketing", "Legal", "Design"]} onChange={null}/>
      <Button text="Submit" type="button" onClick={() => {
        // this.props.history.push("/results");
        window.location = "/results";

    }}/>
    </form>
  </div>
);

export default SearchForm;
