import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import pic from './banner.jpg';

const Jumbo = () => (
  <div style={{margin:"0 auto"}}>
    <img src={pic} style={{height:"100%", width:"100%", paddingBottom:"20px"}} />
  </div>
)

export default Jumbo;
