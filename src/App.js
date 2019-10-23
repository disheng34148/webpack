import React, { Component } from 'react';
import '@style/reset.scss';
import Login from '@pages/Login';

class App extends Component {
    render() {
        return (
            <div>
                <Login></Login>
            </div>
        );
    }
}

export default App;