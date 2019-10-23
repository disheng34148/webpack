import React, { Component } from 'react';
import { Button } from 'antd';
import '../style/reset.scss';
const bg = require('../assets/background.jpg');

class Lists extends Component {
    render() {
        return (
            <div>
                <Button type="primary">button</Button>
                <ul className="sunbo-ul">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <img src={bg} />
            </div>
        );
    }
}

export default Lists;