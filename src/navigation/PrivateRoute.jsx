import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {

    const [isLogin] = useState(false);

    return <Route {...rest} render={props => (
        isLogin
            ? <Component {...props} />
            : <Redirect to="/signin" />
    )} />;
}

export { PrivateRoute };
