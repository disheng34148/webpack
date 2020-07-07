import React, { Component } from 'react'
import lrz from 'lrz'

export default class Wechat extends Component {
    constructor(props) {
        super(props)
        this.state = {src: ''}
    }
    componentDidMount() {
        const wechatjsdk = document.createElement('script')
        wechatjsdk.setAttribute('src', 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js')
        document.body.appendChild(wechatjsdk)
        const url = window.location.href.split('#')[0];
        fetch(`https://www.cimu34148.cn:8443/wechat?url=${url}`)
        .then(res => res.json())
        .then(json => {
            json = json.data
            json.jsApiList = ['chooseImage']
            wx.config({
                debug: json.debug,
                appId: json.appId,
                timestamp: json.timestamp,
                nonceStr: json.nonceStr,
                signature: json.signature,
                jsApiList: json.jsApiList
            })
        })
        .catch(err => {
            console.log(err)
        })
        const that = this
        document.querySelector('#file').addEventListener('change', function() {
            lrz(this.files[0]).then(res => {
                console.log(res)
                that.setState({src: res.base64})
            }).catch(err => {
                console.log(err)
            })
        })
    }

    chooseImage = () => {
        wx.ready(function() {
            
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片

                },
                fail: function(err) {
                    console.log(err)
                }
            });
        })
    }

    render() {
        let img = this.state.src
        return (
            <>
                <input type="file" id="file" />
                <button onClick={() => this.chooseImage()}>选择图片</button>
                <img src={img} alt=""/>
            </>
        )
    }
}
