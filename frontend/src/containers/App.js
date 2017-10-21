import {connect} from 'react-redux';
import AppComponent from '../components/AppComponent';
import {test} from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    test: () => {
      dispatch(test());
    }
  }
}

const App = connect(
  null,
  mapDispatchToProps
)(AppComponent);

export default App;
