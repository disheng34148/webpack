import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
// import loadable from './util/loadable';
import Vip from './pages/Vip';
import Lottery from './pages/Lottery';
import Wechat from './pages/Wechat';
import VerificationCode from './pages/VerificationCode';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <Router>
                    <Switch>
                        <Route path="/vip" component={Vip}></Route>
                        <Route path="/lottery" component={Lottery}></Route>
                        <Route path="/wechat" component={Wechat}></Route>
                        <Route path="/verification" component={VerificationCode}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Content;