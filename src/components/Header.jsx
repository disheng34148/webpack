import React, { Component } from 'react';
import { Avatar } from 'antd';
import avator from '@/avator.jpg';
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header style={headerStyle}>
                <Avatar size={64} icon="user" src={avator} />
                <Link to="/login" id="quit">退出</Link>
            </header>
        );
    }
}

const headerStyle = {
    'background': '#1890ff',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'padding': '10px 20px'
}

export default Header;