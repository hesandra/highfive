/*import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { CompanyAuth } from '../components';
import { checkCompanyLogin, updateCompanyProfile } from '../actions/companyAuth';


const mapStateToProps = (state, props) => {
  const { isAuthenticated, profile, company_backend_profile } = state.companyAuth;
  //was state.companyAuth before above
  return {
    isAuthenticated,
    profile,
    company_backend_profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkCompanyLogin()),
    // fetch JobPosts here
    onUpdateCompanyProfile: (profile) => {
      dispatch(updateCompanyProfile(profile));
    }
  };
};

const CompanyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(CompanyAuth);
export default CompanyProfileContainer;
*/