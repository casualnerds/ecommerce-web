import {
    REQUEST_GET_TRANSACTION_PERYEAR,
    REQUEST_GET_TRANSACTION_PERYEAR_SUCCESS,
    REQUEST_GET_TRANSACTION_PERYEAR_FAILED
} from '../constant';

const initialState = {
    transactionsPerYear: {},
    isLoadingGetTransactionPerYear: false,
    transactionsPerYearError: {}
};

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_GET_TRANSACTION_PERYEAR:
            return {
                ...state,
                isLoadingGetTransactionPerYear: true
            };
        case REQUEST_GET_TRANSACTION_PERYEAR_SUCCESS:
            return {
                ...state,
                isLoadingGetTransactionPerYear: false,
                transactionsPerYear: action.data
            };
        case REQUEST_GET_TRANSACTION_PERYEAR_FAILED:
            return {
                ...state,
                isLoadingGetTransactionPerYear: false
            };
        default:
            return state;
    }
};

export { transactionReducer };
