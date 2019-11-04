import React, { Component } from "react";
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../App';
import loadable from '../util/loadable';

export default class RouteConfig extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={loadable(() => import(/* webpackChunkName: "Login" */'@pages/Login'))}></Route>
                    <Route path="/login" component={loadable(() => import(/* webpackChunkName: "Login" */'@pages/Login'))}></Route>
                    <Route path="/home" render={() =>
                        <App></App>
                    }></Route>
                </Switch>
            </Router>
        )
    }
}