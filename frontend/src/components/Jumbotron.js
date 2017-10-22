import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import pic from '../imgs/jumbotronPic.jpg';

const Jumbo = () => (

  <Jumbotron>
    <img src={pic} style={{height:"500px", width:"100%"}} />
    <p> Social Serve </p>
  </Jumbotron>
)

export default Jumbo;
