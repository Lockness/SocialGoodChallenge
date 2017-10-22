import {connect} from 'react-redux';
import MemberPage from '../components/MemberPage';
import companies from '../Mock_Data/companies.json';

const mapStateToProps = (state, ownProps = {companies}) => {
  return {
    companies: ownProps.companies
  }
};

const MemberPageContainer = connect(
  mapStateToProps,
  null
)(MemberPage);

export default MemberPageContainer;
