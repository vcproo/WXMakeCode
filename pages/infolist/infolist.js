// pages/infolist/infolist.js
const app = getApp()
var httpUrl = app.globalData.url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infolist:[],
    statusBarHeight: app.globalData.statusBarHeight,
    page:1,
    limit:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '请稍后',
      mask: true
    })
    var that = this
    var type = options.type
    var project_id = options.project_id
    var device_name_id = options.device_name_id
    var brand_id = options.brand_id
    var model_id = options.model_id
    var name = options.name
    wx.request({
      url: httpUrl + '/getStaticInfo.php',
      data: {
        type:type,
        project_id:project_id,
        device_name_id:device_name_id,
        brand_id:brand_id,
        model_id:model_id,
        name:name
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.hideLoading()
        var data = res.data;
        // console.log(data)
        // return false
        if(data.success == true){
          var allList = res.data.list
          var page = (that.data.page-1)*that.data.limit
          var plist = allList.slice(page,that.data.limit)
          that.setData({
            infolist :plist,
            allList:allList
          })          
        }else{
          wx.showToast({
            title: data.msg,
            icon: 'none',
            duration: 1000,
            mask: true,
          })
        }
        
      },
      fail: function (res) {
        wx.showToast({
          title: '服务器无响应，请稍后重试',
          icon: 'none',
          duration: 1000,
          mask: true,
        })
      }
    })
  },

  /**位置流水*/
  location: function (event) {
    var that = this
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../account/account?type=1&id='+id,
    })
  },

  /**故障流水*/
  repair: function (event) {
    var that = this
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../account/account?type=2&id='+id,
    })
  },

  //返回
  goback:function(){
    wx.navigateBack({
      delta: 0,
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
    wx.showLoading({
      title: '请稍后',
      mask: true
    })
    var that = this
    var limit = that.data.limit
    var page = that.data.page
    var current = page * limit
    var list = that.data.allList
    var addList = list.slice(current,(page+1)*limit)
    //var addList = list.slice(1000,1010)
    var infolist = that.data.infolist
    if(addList.length==0){
      wx.showToast({
        title: '暂无更多数据',
        icon: 'none',
        duration: 1000,
        mask: true,
      })
      return false;
    }else{
      var newlist = infolist.concat(addList)
      that.setData({
        infolist:newlist,
        page:page+1
      })
      wx.hideLoading()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})