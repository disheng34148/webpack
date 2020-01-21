import React, { Component } from 'react';
import drawBtn from '@/btn.png';
import '@style/lottery.scss';
import {Modal} from 'antd';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            width: 400,
            total: 0,
            rotate: 30,
            count: 0,
            running: false
        }
    }

    componentWillMount() {
        this.getList()
    }

    start = () => { // 随机生成一个0-5的index
        if(this.state.running) return;
        let index = parseInt(Math.random()*6);
        this.setState({
            running: true,
            count: ++this.state.count,
            rotate: 360*this.state.total*this.state.count-(index*60)
        });
        let name = this.state.list[index].name;
        setTimeout(() => {
            this.setState({
                running: false
            })
            let msg = name === '未中奖' ? '谢谢参与！' : `恭喜您！获得${name}`;
            Modal.success({
                content: msg
            })
        }, 6000)
    }

    getList = async () => {
        try {
            const data = await $http('/lottery');
            this.setState({
                list: data.list,
                total: data.list.length
            })
        } catch (err) {}
    }

    render() {
        const {list, total, width, rotate} = this.state;
        const itemWidth = (4 - 2 * Math.sqrt(3)) * 0.4 * width + 'px';
        return (
            <div id="lottery">
                <ul style={{transform: `rotate(${rotate}deg)`}}>{
                    list.map((item, index) => {
                        return (
                            <li>
                                <img
                                    src={item.img}
                                    style={{
                                        width: itemWidth,
                                        transform: `rotate(${index/total}turn)`,
                                        transformOrigin: `50% ${0.5*width}px`,
                                        paddingTop: `${0.5 * width - 0.22 * width * Math.sqrt(3)}px`
                                    }} />
                            </li>
                        )
                    })
                }</ul>
                <img src={drawBtn} onClick={() => this.start()} />
            </div>
        );
    }
}

export default List;