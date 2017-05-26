// pages/user/user.js
import fetch from '../../utils/fetch.js';
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docArray: [
      {
        avator: "",
        name: "张XX",
        position: "主治医师",
        address: "北京市三甲",
        praiseNum: 90,
        phrase: "中国男科带头人---男人有难题我来帮助你，中国男科带头人---男人有难题我来帮助你"
      },
      {
        avator: "",
        name: "张XX",
        position: "主治医师",
        address: "北京市三甲",
        praiseNum: 90,
        phrase: "你有问题,我来帮助你"
      },
      {
        avator: "",
        name: "张XX",
        position: "主治医师",
        address: "北京市三甲",
        praiseNum: 90,
        phrase: "你有问题,我来帮助你"
      }
    ]
  },
  //跳转到问诊单页
  bindSheetTap(){
    wx.navigateTo({
      url: '/pages/sheet/sheet',
    })
  },
  //跳转传播页
  bindSpreadTap(){
    wx.navigateTo({
      url: '/pages/spread/spread',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 存数据
    // fetch({
    //   url: "/health/user/save",
    //   baseUrl: "https://health.lianlianchains.com",
    //   // baseUrl: "http://192.168.50.157:8888",
    //   data: {
    //     'openid': '456',
    //     'nickname': '讲道理啊',
    //     'sex': "男",
    //     'age':12,
    //     'phoneno': 16666666666
    //   },
    //   method: "POST",
    //   header: { 'content-type': 'application/x-www-form-urlencoded' }
    // }).then(result => {
    //   console.log(result);
    // }).catch(err => {
    //   console.log("出错了")
    //   console.log(err)
    // });

    // 查询
    // fetch({
    //   url: "/health/user/query",
    //   baseUrl: "https://health.lianlianchains.com",
    //   // baseUrl: "http://192.168.50.157:8888",
    //   data: {
    //     'openid': '123'
    //   },
    //   method: "POST",
    //   header: { 'content-type': 'application/x-www-form-urlencoded' }
    // }).then(result => {
    //   console.log(result);
    // }).catch(err => {
    //   console.log("出错了")
    //   console.log(err)
    // });

    //更新
    // fetch({
    //   url: "/health/user/update",
    //   baseUrl: "https://health.lianlianchains.com",
    //   // baseUrl: "http://192.168.50.157:8888",
    //   data: {
    //     'openid': '123',
    //     'nickname': 'aabbbb',
    //     'sex': 1,
    //     'age':18,
    //     'phoneno': 16666666668
    //   },
    //   method: "POST",
    //   header: { 'content-type': 'application/x-www-form-urlencoded' }
    // }).then(result => {
    //   console.log(result);

    //   fetch({
    //   url: "/health/user/query",
    //   baseUrl: "https://health.lianlianchains.com",
    //   // baseUrl: "http://192.168.50.157:8888",
    //   data: {
    //     'openid': '123'
    //   },
    //   method: "POST",
    //   header: { 'content-type': 'application/x-www-form-urlencoded' }
    // }).then(result => {
    //   console.log(result);
    // }).catch(err => {
    //   console.log("出错了")
    //   console.log(err)
    // });
    // }).catch(err => {
    //   console.log("出错了")
    //   console.log(err)
    // });

    //积分
    // fetch({
    //   url: "/health/score/update",
    //   baseUrl: "https://health.lianlianchains.com",
    //   // baseUrl: "http://192.168.50.157:8888",
    //   data: {
    //     'openid': '123',
    //     'score': -30,
    //     'type': 1
    //   },
    //   method: "POST",
    //   header: { 'content-type': 'application/x-www-form-urlencoded' }
    // }).then(result => {
    //   console.log(result);

    //   fetch({
    //     url: "/health/score/query",
    //     baseUrl: "https://health.lianlianchains.com",
    //     // baseUrl: "http://192.168.50.157:8888",
    //     data: {
    //       'openid': '123'
    //     },
    //     method: "POST",
    //     header: { 'content-type': 'application/x-www-form-urlencoded' }
    //   }).then(result => {
    //     console.log(result);
    //   }).catch(err => {
    //     console.log("出错了")
    //     console.log(err)
    //   });
    // }).catch(err => {
    //   console.log("出错了")
    //   console.log(err)
    // });

    //获取积分总额
    // fetch({
    //   url: "/health/score/query",
    //   baseUrl: "http://192.168.50.157:8888",
    //   data: {
    //     'openid': '123'
    //   },
    //   method: "POST",
    //   header: { 'content-type': 'application/x-www-form-urlencoded' }
    // }).then(result => {
    //   console.log(result);
    // }).catch(err => {
    //   console.log("出错了")
    //   console.log(err)
    // });
    app.getUserInfo((userInfo) => {
      console.log(userInfo);
      //更新数据
      this.setData({
        userInfo: userInfo
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})