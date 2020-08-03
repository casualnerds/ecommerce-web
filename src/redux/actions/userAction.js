import axios from 'axios';

import {
    REQUEST_SIGNIN,
    REQUEST_SIGNIN_SUCCESS,
    REQUEST_SIGNIN_FAILED
} from '../constant';

const requestSignin = (payload) => {
    return async dispatch => {
        try {
            dispatch({
                type: REQUEST_SIGNIN
            });

            const { data } = await axios({
                method: 'GET',
                url: 'https://swapi.dev/api/'
            });

            dispatch({
                type: REQUEST_SIGNIN_SUCCESS,
                data
            });

        } catch (error) {
            console.log(error);
            dispatch({
                type: REQUEST_SIGNIN_FAILED,
                error: error.data
            });
        }
    };
};

export { requestSignin };
