import React, { Component } from 'react';
import '@style/reset.scss';
import Header from '@com/Header';

class App extends Component {
    render() {
        return (
            <div id="views">
                <Header></Header>
            </div>
        );
    }
}

export default App;