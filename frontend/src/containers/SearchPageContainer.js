import {connect} from 'react-redux';
import SearchForm from '../components/SearchForm';
import companies from '../Mock_Data/companies.json';

const mapStateToProps = (state) => {
  return {
    companies: null
  }
};

const SearchPageContainer = connect(
  mapStateToProps,
  null
)(SearchForm);

export default SearchPageContainer;
