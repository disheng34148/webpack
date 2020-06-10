import React, { Component } from 'react'

export default class Wechat extends Component {
    constructor(props) {
        super(props)
        this.state = {src: ''}
    }
    componentDidMount() {
        const url = window.location.href.split('#')[0];
        fetch(`https://www.cimu34148.cn:8443/wechat?url=${url}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
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
    }

    chooseImage = () => {
        const that = this
        wx.ready(function() {
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    console.log(localIds)
                    wx.getLocalImgData({
                        localId: localIds[0],
                        success: function(r) {
                            var localData = res.localData;
                            that.setState({
                                src: localData
                            })
                        }
                    })
                },
                fail: function(err) {
                    console.log(err)
                },
                complete: function(res) {
                    console.log(res)
                }
            });
        })
    }

    render() {
        let img = this.state.src
        return (
            <>
                <button onClick={() => this.chooseImage()}>选择图片</button>
                <img src={img} alt=""/>
            </>
        )
    }
}
