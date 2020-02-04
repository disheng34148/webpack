import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
// import loadable from './util/loadable';
import Vip from './pages/Vip';
import Lottery from './pages/Lottery';
import Fruit from './pages/Fruit';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <Router>
                    <Switch>
                        <Route path="/vip" component={Vip}></Route>
                        <Route path="/lottery" component={Lottery}></Route>
                        <Route path="/fruit" component={Fruit}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Content;