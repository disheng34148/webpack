import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
// import loadable from './util/loadable';
import Vip from './pages/Vip';
import List from './pages/List';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <Router>
                    <Switch>
                        <Route path="/vip" component={Vip}></Route>
                        <Route path="/list" component={List}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Content;