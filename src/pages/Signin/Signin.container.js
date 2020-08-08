import { connect } from 'react-redux';

import { Signin } from './Signin.page';
import { requestSignin } from '../../redux/actions/userAction';

const mapStateToProps = state => ({
    isLoadingSignin: state.userReducer.isLoadingSignin,
    user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({
    requestSignin: (payload) => dispatch(requestSignin(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signin);
