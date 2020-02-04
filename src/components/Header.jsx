import React, { Component } from 'react';
import { Avatar } from 'antd';
import avator from '@/avator.jpg';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grain_btn from '@com/Grain_btn';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    quit = () => {
        localStorage.clear();
        this.props.history.push('/login');
    }

    render() {
        return (
            <header style={headerStyle}>
                <Avatar size={64} icon="user" src={avator} />
                <a href="javascript:;" id="quit" onClick={this.quit}>退出</a>
                <Grain_btn />
            </header>
        );
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired
}

const headerStyle = {
    'background': '#1890ff',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'padding': '10px 20px'
}

export default withRouter(Header);