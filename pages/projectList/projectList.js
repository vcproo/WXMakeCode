// pages/data/data.js
const app = getApp()
var httpUrl = app.globalData.url;
const http = require('../../utils/http.js');
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonClicked: false,
    statusBarHeight: app.globalData.statusBarHeight
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '请稍后',
      mask: true
    })
    //验证登录
    http.islogin()
    wx.showLoading({
      title: '请稍后',
      mask: true
    })
    var data = {};
    http.api('getProject.php', data, 'get', '').then(res => {
      wx.hideLoading()
      if (res.data.success) {
        var list = res.data.list
        that.setData({
          list: list
        })
      } else {
        if (res.data.msg) {
          var msg = res.data.msg;
        } else {
          var msg = '请求失败，请重试';
        }
        wx.showToast({
          title: msg,
          icon: 'none',
          duration: 1500
        })
      }

    })
  },
  /**
   * 新建盘库回调方法
   */
  changeData:function(){
    this.onLoad();
  },
  /**
   * 新建盘库
   */
  add:function (){
    util.buttonClicked(this);
    wx.navigateTo({
      url: '../jianxiuAdd/jianxiuAdd',
    })
  },
  /**
   * 跳转
   */
  linkUrl:function(e){
    util.buttonClicked(this);
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../deviceList/deviceList?project_id='+id,
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
    var that = this
    
  },

  //返回
  goback: function () {
    wx.navigateBack({
      delta: 0,
    })
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