import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import loadable from './util/loadable';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <Router>
                    <Switch>
                        <Route path="/vip" component={loadable(() => import(/* webpackChunkName: "Vip" */'@pages/Vip'))}></Route>
                        <Route path="/list" component={loadable(() => import(/* webpackChunkName: "List" */'@pages/List'))}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Content;