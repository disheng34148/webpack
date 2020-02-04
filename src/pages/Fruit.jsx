import React, { Component } from 'react';
import '@style/login.scss';
import { Modal } from 'antd';

class Fruit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruits: []
        }
    }
    componentWillMount() {
        this.getFruits()
    }
    getFruits = async () => {
        try {
            const data = await $http('/lottery');
            this.setState({
                fruits: data.list
            })
        } catch (err) {}
    }

    render() {
        return (
            <div id="fruit">
                
            </div>
        )
    }
}

export default Fruit;