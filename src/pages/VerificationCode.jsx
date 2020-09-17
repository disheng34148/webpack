import React, { Component } from 'react';
import Captcha from '@com/Captcha';
import SliceCode from '@com/SliceCode';

export default class VerificationCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'none'
        }
    }
    validSliceCode = () => {
        this.setState({
            show: 'block'
        })
    }

    render() {
        const show = this.state.show
        return (
            <div>
                <Captcha/>
                <SliceCode show={show}/>
                <button onClick={() => this.validSliceCode()}>点击按钮进行验证</button>
            </div>
        )
    }
}
