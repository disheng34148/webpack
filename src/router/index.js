import React, { Component } from "react";
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "@pages/Login";
import App from '../App';

export default class RouteConfig extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route path="/" render={() => 
                        <App></App>
                    }></Route>
                </Switch>
            </Router>
        )
    }
}