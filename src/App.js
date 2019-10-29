import React, { Component } from 'react';
import '@style/reset.scss';
import Header from '@com/Header';
import MenuLeft from '@com/MenuLeft';
import Content from './Content';

class App extends Component {
    render() {
        return (
            <div id="views">
                <Header></Header>
                <div id="box">
                    <MenuLeft></MenuLeft>
                    <Content></Content>
                </div>
            </div>
        );
    }
}

$('#views').addClass('add_jquery');

export default App;