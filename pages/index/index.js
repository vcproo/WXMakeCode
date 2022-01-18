//index.js
//获取应用实例
const app = getApp()
var httpUrl = app.globalData.url;
const util = require('../../utils/util.js');
Page({
  data: {
    buttonClicked:false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    wx.showLoading({
      title: '请稍后',
      mask: true
    })
    //检测是否登录
    var userId = wx.getStorageSync('userId')
    //已登录
    if(1){
      wx.redirectTo({
        url: '../main/main'
      })
    }else{
      //未登录
      wx.hideLoading()
    }
  },
  
  /**
   * 获取用户名/手机号
   */
  usernameInput:function(e){
    var username = e.detail.value.replace(/\s+/g, '')
    var that = this
    that.setData({
      username:username
    })
  },
  /**
   * 密码
   */
  passwordInput:function(e){
    var password = e.detail.value.replace(/\s+/g, '')
    var that = this
    that.setData({
      password:password
    })
  },
  /**
   * 登录
   */
  login:function(e){
    util.buttonClicked(this);//防止连续点击
    wx.showLoading({
      title: '请稍后',
      mask: true
    })
    var that = this
    var username = that.data.username
    var password = that.data.password
    if(username==undefined||password==undefined){
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    wx.request({
      url: httpUrl + '/doctorlogin.php',
      method: 'get',
      data: {
        username:username,
        password: password,
      },
      success: function (rag) {
        wx.hideLoading()
        if(rag.data.success == true){
          wx.setStorage({
            key: 'userId',
            data: rag.data.id,
          })
          wx.setStorage({
            key: 'userName',
            data: rag.data.name
          })
          wx.showLoading({
            title: '登录成功',
            icon: 'none',
            duration: 1000
          })
          setTimeout(function () {
            // wx.navigateBack()
            wx.redirectTo({
              url: '../main/main'
            })
          }, 1000)
        }else{
          wx.showToast({
            title: '用户名或密码不正确',
            icon: 'none',
            duration: 1000
          })
        }
      },
      fail:function(reg){
        wx.showToast({
          title: '网络异常，请重试',
          icon: 'none',
          duration: 1000
        })
      }

    })
  },
   
})
