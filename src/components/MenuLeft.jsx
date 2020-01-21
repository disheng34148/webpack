import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { withRouter } from 'react-router-dom';
const { SubMenu } = Menu;

class MenuLeft extends Component {
    constructor(props) {
        super(props)
    }

    menuSelect = item => {
        let path = item.item.props.path || '/';
        this.props.history.push(path);
    }

    render() {
        return (
            <div style={{ width: 256, float: 'left', background: '#001529', height: '100%' }}>
                <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={['sub1']} mode="inline" theme="dark" onSelect={this.menuSelect}>
                    <Menu.Item key="1" path="/vip">
                        <Icon type="pie-chart" />
                        <span>会员</span>
                    </Menu.Item>
                    <Menu.Item key="2" path="/lottery">
                        <Icon type="pie-chart" />
                        <span>抽奖</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default withRouter(MenuLeft);
