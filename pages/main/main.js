// pages/main/main.js
const app = getApp()
var httpUrl = app.globalData.url;
const util = require('../../utils/util.js');
const http = require('../../utils/http.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonClicked:false,
    statusBarHeight: app.globalData.statusBarHeight
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    var that = this
    //获取当前位置
    //that.getCity()
    // wx.showLoading({
    //   title: '请稍后',
    //   mask: true
    // })
    // http.islogin()

   
  },
    //获取当前位置
    getCity: function(e) {
      var that = this;
        wx.getLocation({
          success: function (res) {
            // console.log(res);
            // console.log(res.latitude);
            // console.log(res.longitude);
            const url= 'http://api.map.baidu.com/reverse_geocoding/v3/';
            const ak = 'yv2iBfNYTDmBMfa88fA0YySsZFgSZo46';
            //小程序的ajax请求需要在后台安全域名配置增加 开发测试中在详情里勾选-不校验合法域名即可
            wx.request({
              url,
              data: {
                ak,
                location: `${res.latitude},${res.longitude}`,
                output: 'json',  //格式
              },
              success: function (res){
                // console.log(res);
                if(res.data.status == "0"){
                  that.setData({
                    province: res.data.result.addressComponent.province,
                    city: res.data.result.addressComponent.city,
                    district: res.data.result.addressComponent.district,
                    isShow: true
                  });
                  wx.hideLoading()
                }else{
                  that.setData({
                    unGeo: '未知位置',
                    isShow: false
                  });
                  wx.hideLoading()
                }
              }
            })
          }
        })
      
  },
  /**
   * 生成二维码
   */
  code:function(){
    util.buttonClicked(this);
    wx.navigateTo({
      url: '../code/code',
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

  }
})