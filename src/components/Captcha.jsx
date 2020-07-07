import React, { Component } from 'react'

export default class Captcha extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ctx: null
        }
        this.width = 100
        this.height = 40
    }

    componentDidMount() {
        const canvas = document.getElementById('captcha-random')
        const ctx = canvas.getContext("2d")
        //如有适配需求可以自己适配，本文宽高写死了
        canvas.width = this.width// 100 
        canvas.height = this.height// 40
        setTimeout(() => {
            this.setState({
                ctx: ctx
            })
            this.init()
        }, 10)
    }

    getCode = () => {
        const allCode = 'ABCEFGHJKMNPQRSTWXYZ1234567890'
        let result = []
        for (let i = 0; i < 4; i++) {
            const randomCodeIndex = Math.floor(Math.random() * allCode.length)
            const text = allCode[randomCodeIndex].toLowerCase()
            result.push(text)
        }
        return result
    }
    
    init = () => {
        const ctx = this.state.ctx;
        ctx.clearRect(0, 0, this.width, this.height)
        for (let i = 0; i < 4; i++) {
            const
                currentCode = this.getCode()[i],
                //产生0~30之间的随机弧度
                deg = (Math.random() * 30 * Math.PI) / 180,
                x = 10 + i * 20,
                y = 20 + Math.random() * 8
            ctx.font = "23px 微软雅黑"
            ctx.translate(x, y)
            ctx.rotate(deg)

            ctx.fillStyle = this.randomColor()
            ctx.fillText(currentCode, 0, 0)

            ctx.rotate(-deg)
            ctx.translate(-x, -y)
        }
        for (let i = 0; i <= 5; i++) {
            ctx.strokeStyle = this.randomColor()
            ctx.beginPath()
            ctx.moveTo(
                Math.random() * this.width,
                Math.random() * this.height
            )
            ctx.lineTo(
                Math.random() * this.width,
                Math.random() * this.height
            )
            ctx.stroke()
        }
        for (let i = 0; i < 10; i++) {
            ctx.strokeStyle = this.randomColor()
            ctx.beginPath()
            const x = Math.random() * this.width
            const y = Math.random() * this.height
            ctx.moveTo(x, y)
            ctx.lineTo(x + 1, y + 1)
            ctx.stroke()
        }
    }

    randomColor = () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        return `rgb(${r},${g},${b})`
    }

    render() {
        return (
            <>
                <canvas id="captcha-random" style={{'border': '1px solid red'}} onClick={() => this.init()}></canvas>
            </>
        )
    }
}
