//logs.js
//const util = require('../../utils/util.js');
import u from '../../utils/util.js';
Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    console.log(options);
    
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return u.formatTime(new Date(log))
      })
    })
  }
})
