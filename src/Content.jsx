import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import List from '@pages/List';
import Home from '@pages/Home';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <Router>
                    <Switch>
                        <Route path="/list" component={List}></Route>
                        <Route path="/home" component={Home}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Content;