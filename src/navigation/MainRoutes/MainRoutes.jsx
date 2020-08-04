import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pageConfig';

function MainRoutes({ match }) {
    return (
        <Switch>
            <Route path={match.path} component={Home} />
        </Switch>
    );
}

export { MainRoutes };
