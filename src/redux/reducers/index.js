import { combineReducers } from 'redux';

import { userReducer } from '../reducers/userReducer';
import { transactionReducer } from '../reducers/transactionReducer';

const reducers = combineReducers({
    userReducer,
    transactionReducer
});

export { reducers };
