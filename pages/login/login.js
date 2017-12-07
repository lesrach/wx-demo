// pages/login/login.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData:null,
    src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505189777688&di=0da47150e7259ec0692ef700080a8ae9&imgtype=0&src=http%3A%2F%2Fwww.sznews.com%2Fguoxue%2Fcontent%2Fattachement%2Fjpg%2Fsite3%2F20151009%2F4439c452e8ec178152a14d.jpg"
  },
  submit({detail}){
     //判断
   //定义动画

    var animation = wx.createAnimation({
      duration:1500,
      timingFunction:"ease-in-out",
      transformOrigin:"0 0 0"
    })

    animation.rotate(45).step();

    this.setData({
      animationData: animation.export()
    })
    if (!detail.value.username || !detail.value.pwd){
      // wx.showToast({
      //   title: '不能为空',
      //   icon:"loading",
      //   image:"/static/imgs/boy.png"
      // })
      // wx.showModal({
      //   title: '提醒',
      //   content: '输入了么？',
      //   confirmText:"GO",
      //   success(res){
      //     console.log(res);
      //   }
      // })
      // wx.showActionSheet({
      //   itemList:["哈哈","呵呵"],
      //   success(res){
      //     console.log(res);
      //   }
      // })
      return
    };
    wx.showLoading({
      title: '登陆中...',
    })
    wx.request({
      method:"POST",
      data: detail.value,
      url: app.globalData.url+'/api/login', //，这里必须是全地址。上线后请求头必须是https
      success(res){
          //console.log(res)
          wx.setStorage({
            key: 'user',
            data: detail.value.username,
          })
        wx.hideLoading()
          //跳转
          // wx.reLaunch({
          //   url: '/pages/user/user'
          // })
      }
    })
  },
  choseImg(){
    var _this = this;
    wx.chooseImage({
      success: function(res) {
        //console.log(res.tempFilePaths)
        _this.setData({
          src: res.tempFilePaths
        })
      },
    })
  },
  getSys(){
    // wx.makePhoneCall({
    //   phoneNumber:'18502856634'
    // })
    wx.vibrateLong({
      success(){
        console.log("XX");
      }
    })
    // wx.getNetworkType({
    //   success: function (res) {
    //     // 返回网络类型, 有效值：
    //     // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
    //     console.log(res.networkType)
    //   }
    // });
    // wx.getSystemInfo({
    //   success: function(res) {
    //     console.log(res)
    //   },
    // })
  }
})