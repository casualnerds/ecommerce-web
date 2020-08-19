import { connect } from 'react-redux';

import { Home } from './Home.page';
import { getTransactionPerYear } from '../../redux/actions/transactionAction';

const mapStateToProps = state => ({
    transactionsPerYear: state.transactionReducer.transactionsPerYear,
});

const mapDispatchToProps = dispatch => ({
    getTransactionPerYear: () => dispatch(getTransactionPerYear())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
