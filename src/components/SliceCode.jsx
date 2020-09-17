import React, { Component } from 'react'
import '@style/sliceCode.scss'
import sliceCodeImg from '@/slice_code.png';

export default class SliceCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noticeTxt: '拖动滑块完成拼图',
            ctx: null,
            show: this.props.show
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show
        })
    }

    close = () => {
        this.setState({
            show: 'none'
        })
    }

    init = () => {
        let img = new Image()
        const ctx = this.state.ctx
        img.src = sliceCodeImg
        img.onload = () => {
            ctx.drawImage(img, 0, 0, 300, 160)
        }
    }

    componentDidMount() {
        const canvas = document.getElementById('slice-canvas')
        const ctx = canvas.getContext('2d')
        setTimeout(() => {
            this.setState({
                ctx: ctx
            })
            this.init()
        }, 10)
    }

    render() {
        const {noticeTxt, show} = this.state
        return (
            <div style={{'display': show}}>
                <div id="slice-code-mask" onClick={() => this.close()}></div>
                <div id="slice-code">
                    <canvas id="slice-canvas"></canvas>
                    <footer><button></button>{noticeTxt}</footer>
                </div>
            </div>
        )
    }
}
