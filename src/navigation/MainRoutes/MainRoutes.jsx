import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Product } from '../pageConfig';

function MainRoutes({ match }) {
    return (
        <Switch>
            <Route path="/product" component={Product} />
            <Route path="/" component={Home} />
        </Switch>
    );
}

export { MainRoutes };
