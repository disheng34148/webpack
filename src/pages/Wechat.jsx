import React, { Component } from 'react'

export default class Wechat extends Component {
    componentDidMount() {
        const url = window.location.href.split('#')[0];
        fetch(`http://localhost:3000/wechat?url=${url}`)
        .then(res => res.json())
        .then(json => {
            json.jsApiList = ['chooseImage']
            wx.config({
                debug: json.debug,
                appId: json.appId,
                timestamp: json.timestamp,
                nonceStr: json.nonceStr,
                signature: json.signature,
                jsApiList: json.jsApiList
            })
            wx.ready(function() {
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        console.log(localIds)
                    }
                });
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
