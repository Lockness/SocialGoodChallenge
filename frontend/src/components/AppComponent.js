import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbotron'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginPage from '../containers/LoginPageContainer';
import MemberPageComponent from '../containers/MemberPageContainer';
import SearchForm from './SearchForm';

class AppComponent extends Component {

  render() {

    return (


      <div className="App">
      <Router>
      <div>
        <div className="App-header">
          <Navbar />
        </div>
        <div>



            <div>
              <ul>
              </ul>

              <div style={{paddingTop:"40px"}}></div>
              <Route path="/" component={Jumbo}/>
              <Route path="/signup" component={SignUpForm}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/memberlist" component={MemberPageComponent}/>
              <Route path="/searchform" component={SearchForm}/>

            </div>



        </div>
        </div>
        </Router>
      </div>
    );
  }

}

export default AppComponent;
