import {connect} from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = state => {
  return {
    test: state.loggedIn
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  null
)(Navbar);

export default NavbarContainer;
