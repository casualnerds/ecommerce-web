import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

function RestrictedRoute({
    component: Component,
    ...rest
}) {

    const [isLogin] = useState(false);

    return <Route {...rest} render={props => (
        isLogin
            ? <Redirect to="/" />
            : <Component {...props} />
    )} />;
}

export { RestrictedRoute };
