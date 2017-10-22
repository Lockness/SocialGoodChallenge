import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {logIn} from "../actions";


const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => {
      dispatch(logIn())
    }
  }
}

const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginPageContainer;

