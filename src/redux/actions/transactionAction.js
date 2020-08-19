import {
    REQUEST_GET_TRANSACTION_PERYEAR,
    REQUEST_GET_TRANSACTION_PERYEAR_SUCCESS,
    REQUEST_GET_TRANSACTION_PERYEAR_FAILED
} from '../constant';

const getTransactionPerYear = () => {
    return dispatch => {
        try {
            dispatch({ type: REQUEST_GET_TRANSACTION_PERYEAR });
            const data = {
                labels: [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
                ],
                datasets: [
                    {
                        label: 'Transactions',
                        backgroundColor: 'rgba(140, 74, 17, 0.3)',
                        borderColor: 'rgb(140, 74, 17)',
                        data: [
                            3,
                            6,
                            8,
                            5,
                            10,
                            12,
                            13,
                            10,
                            11,
                            15,
                            14,
                            22
                        ],
                        borderWidth: '2',
                        pointRadius: 2
                    }
                ]
            };
            dispatch({ type: REQUEST_GET_TRANSACTION_PERYEAR_SUCCESS, data });
        } catch (error) {
            dispatch({ type: REQUEST_GET_TRANSACTION_PERYEAR_FAILED, err: error });
        }
    };
};

export { getTransactionPerYear };
