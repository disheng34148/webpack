import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log('list');
    }

    render() {
        return (
            <div>
                <h1>list</h1>
            </div>
        );
    }
}

export default List;