import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentDetail from './ContentDetail';
import ContentPanel from './ContentPanel';

const Main = props => (
    <Switch>
        <Route exact path="/" component={ContentPanel} />
        <Route path="/items/:id" component={ContentDetail} />
    </Switch>
);

export default Main;