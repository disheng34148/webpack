import React, { Component } from "react";
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../App';
import loadable from '../util/loadable';

export default class RouteConfig extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={loadable(() => import(/* webpackChunkName: "Login" */'@pages/Login'))}></Route>
                    <Route path="/" render={() =>
                        <App></App>
                    }></Route>
                </Switch>
            </Router>
        )
    }
}