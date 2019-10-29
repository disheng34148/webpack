import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import loadable from './util/loadable';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <Router>
                    <Switch>
                        <Route path="/list" component={loadable(() => import(/* webpackChunkName: "List" */'@pages/List'))}></Route>
                        <Route path="/home" component={loadable(() => import(/* webpackChunkName: "Home" */'@pages/Home'))}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Content;