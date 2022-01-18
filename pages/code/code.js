// pages/data/data.js
const app = getApp()
var httpUrl = app.globalData.url;
const http = require('../../utils/http.js');
const util = require('../../utils/util.js');
var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;

const W = wx.getSystemInfoSync().windowWidth;
const rate = 750.0 / W;

// 300rpx 在6s上为 150px
const code_w = 300 / rate;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonClicked: false,
    statusBarHeight: app.globalData.statusBarHeight,
    text: 'https://github.com/tomfriwel/weapp-qrcode',
    image: '',
    code_w: code_w
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
    //二维码携带的参数
    var project_id = 1
    var device_id = 2
    var brand_id = 3
    var model_id = 4
    //验证登录
    //http.islogin()
    wx.showToast({
      icon: 'loading',
      title: '生成中',
      duration: 1000,
      mask:true
    })
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: "dev-" + project_id + "-" + device_id + "-" + brand_id + "-" + model_id,
      width: code_w,
      height: code_w,
      colorDark: "#000000",//颜色
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
    });
  },
  //点击保存图片
  save() {
    let that = this
    wx.showLoading({
      title: '正在保存图片',
      mask: true
    })
    //判断用户是否授权"保存到相册"
    wx.getSetting({
      success(res) {
        //没有权限，发起授权
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() { //用户允许授权，保存图片到相册
              that.savePhoto();
            },
            fail() { //用户点击拒绝授权，跳转到设置页，引导用户授权
              wx.openSetting({
                success() {
                  wx.authorize({
                    scope: 'scope.writePhotosAlbum',
                    success() {
                      that.savePhoto();
                    }
                  })
                }
              })
            }
          })
        } else { //用户已授权，保存到相册
          that.savePhoto()
        }
      }
    })
  },
  //保存图片到相册，提示保存成功
  savePhoto() {
    let that = this
    //console.log(111)
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success: function (reg) {
        //console.log(reg)
        var tempFilePath = reg.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success(res) {
            //console.log(res)
            wx.showToast({
              title: '保存成功',
              icon: "success",
              duration: 1000
            })
          }
        })

      },
      fail: function (res) {
        console.log(res);
      }
    });


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