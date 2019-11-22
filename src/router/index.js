import React, { Component } from "react";
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../App';
// import loadable from '../util/loadable';
import Login from '../pages/Login'

export default class RouteConfig extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={App}></Route>
                </Switch>
            </Router>
        )
    }
}