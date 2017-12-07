var app = getApp();

import util from '../../utils/util.js';

// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505189777688&di=0da47150e7259ec0692ef700080a8ae9&imgtype=0&src=http%3A%2F%2Fwww.sznews.com%2Fguoxue%2Fcontent%2Fattachement%2Fjpg%2Fsite3%2F20151009%2F4439c452e8ec178152a14d.jpg',
    name: '今夜无眠',
    author: 'lesrach',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
     msg:"吃鸡吃鸡！",
     uid:"CD001",
     company:"入点",
     arr:{
       game:"荒野求生"
     },
     movies:["日本","韩国","美国","香港"],
     country: [{ name: "日本" }, { name: "北美" }, { name: "大陆"}],
     idx:0,
     time:'2017-11-21',
     years:["2017","2018","2019"],
     months:[1,2,3,4,5,6,7,8,9],
     condition:true,
     todos:[{
       name:"yangj",
       age:30
     },{
       name:"haohao",
       age:32
     }],
     imgUrls: [
       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
     ],
     markers:[{
       id:"CD001",
       longitude: "104.0763",
       latitude: "30.6233",
       iconPath:"/static/imgs/girl.png",
       width:40,
       height:40,
       callout:{
         content:"金融广场",
         fontSize:40,
         color:"#0cc440",//
         padding:8,
         borderRadius:18,
         display:"ALWAYS"
       }
     }],
     polyline: [{
       points: [{
         longitude: 113.3245211,
         latitude: 23.10229
       }, {
         longitude: 113.324520,
         latitude: 23.21229
       }],
       color: "#0cc440",
       width: 2,
       dottedLine: true
     }],
     controls:[{
       id:"KZ001",
       iconPath:'/static/imgs/boy.png',
       clickable:true,
       position:{
         top:300,
         left:20,
         height:40,
         width:40
       }
     }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { //参数就是另一个页面跳过来的 query 参数

    console.log(util);
    var _this = this;
    var user = wx.getStorage({
      key: 'user',
      success: function(res) {
        _this.setData({
          name:res.data
        })
      },
    })

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
     console.log("刷新！")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("到底了！")
  },
  onPageScroll(){
       console.log(123)
  },
  handleTap(){
     this.setData({
       msg:"今晚吃鸡！",
       condition:false
     })
    // this.setData({
    //   'arr.game':"吃鸡游戏"
    // });

    // wx.navigateTo({
    //   url: '/pages/logs/logs?name=123'
    // })
  },
  handleCatch(e){
     console.log(e.target.dataset);
  },
  handlelower(){
    console.log("到底了")
  },
  handleSwiper({ detail }){
     console.log(detail)
  },
  handleSubmit({ detail }){
    console.log(detail)
  },
  handleCheck({ detail }){
    console.log(detail.value)
  },
  handleUser({ detail }){
    this.setData({
      msg:detail.value
    })
  },
  handlePicker({ detail }){
     //console.log(detail.value)
     this.setData({
       idx:detail.value
     })
  },
  handleDate({ detail }){
    this.setData({
      time: detail.value
    })
  },
  handlepickview({ detail }){
    console.log(detail.value)
  },
  handleradio({ detail }){
    console.log(detail.value)
  },
  handleslider({ detail }){
    console.log(detail.value)
  },
  handleContro(e){
    //console.log(e.controlId);
    var _this= this;
    wx.getLocation({
      success(res){
        console.log(res.accuracy);
       _this.setData({
         "markers[0].latitude": res.latitude,
         "markers[0].longitude": res.longitude
       })
      }
    })
  },
  openMap(){
    wx.openLocation({
      longitude: 104.0763,
      latitude: 30.6233,
      name:"蜀山",
      address:"剑宗"
    })
  }
})