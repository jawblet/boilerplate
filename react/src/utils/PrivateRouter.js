import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const PrivateRouter = () => {
    return (
        <Switch>
            <Route exact to="/" component={Home}/>
            <Route to="/me" component={Profile}/>
        </Switch>
    );
}
 
export default PrivateRouter;