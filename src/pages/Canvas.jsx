import React, { Component } from 'react'
import '@style/canvas.scss'

export default class Canvas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ctx: null,
            x: 0,
            y: 0,
            off: false,
            width: 0,
            height: 0
        }
    }

    start = event => {
        this.setState({
            off: true,
            x: event.touches[0].pageY,
            y: this.state.width - event.touches[0].pageX
        })
    }

    move = event => {
        event.preventDefault();
        const {off, width, ctx, x, y} = this.state
        if(off === false) return;
        let newX = event.touches[0].pageY;
        let newY = width - event.touches[0].pageX;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(newX, newY);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
        this.setState({
            x: newX,
            y: newY
        })
    }

    end = () => {
        this.setState({
            off: false
        })
    }

    clear = () => {
        const {ctx, width, height} = this.state
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, height, width);
    }

    download = () => {
        let image = new Image();
        image.src = document.getElementById('canvas').toDataURL("image/png");
        let nodeA = document.createElement('a');
        nodeA.setAttribute('href', image.src);
        nodeA.setAttribute('download', 'sign');
        nodeA.style.display = 'none';
        document.body.appendChild(nodeA);
        nodeA.click();
    }

    componentDidMount() {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        const width = document.body.clientWidth
        const height = document.body.clientHeight
        canvas.width = height
        canvas.height = width
        this.setState({
            width: width,
            height: height,
            ctx: ctx
        })
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, height, width)
    }

    render() {
        return (
            <div id="canvas-box">
                <canvas id="canvas" onTouchStart={() => this.start} onTouchEnd={() => this.end} onTouchMove={() => this.move}></canvas>
                <button onClick={() => this.clear} id="clear">重写</button>
                <button onClick={() => this.download} id="download">下载</button>
            </div>
        )
    }
}
