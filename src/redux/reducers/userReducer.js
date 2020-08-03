import {
    REQUEST_SIGNIN,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED
} from '../constant';

const initialState = {
    isLoadingSignin: false,
    user: {},
    errorMessageSignin: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_SIGNIN:
            return {
                ...state,
                isLoadingSignin: true
            };
        case REQUEST_SIGNIN_SUCCESS:
            return {
                ...state,
                user: action.data,
                isLoadingSignin: false
            };
        case REQUEST_SIGNIN_FAILED:
            return {
                ...state,
                errorMessageSignin: action.error,
                isLoadingSignin: false
            };
        default:
            return state;
    }
};

export { userReducer };
