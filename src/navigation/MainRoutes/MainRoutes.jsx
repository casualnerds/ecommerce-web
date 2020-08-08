import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Product, AddProduct } from '../pageConfig';

function MainRoutes() {
    return (
        <Switch>
            <Route path="/product" component={Product} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/" component={Home} />
        </Switch>
    );
}

export { MainRoutes };
