import React from 'react';
import {Navbar, Nav, NavItem, DropdownButton, MenuItem, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import SignUpForm from "./SignUpForm"
import Jumbo from './Jumbotron'

const Navbarr = () => (

    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
        <div>
          <Link to="/">Social Serve</Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
        <li><Link to="/memberlist">Members</Link></li>
        <li><Link to="/searchform">Search</Link></li>
        </Nav>
        <Nav pullRight>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>



)

export default Navbarr;
