
let htturl = 'http://192.165.0.31/device_jk/';//正式
let api = (url, data, type,head,timeout=2000) =>{
  var p = new Promise((success, fail) => {
    wx.request({
      url: htturl + url,
      method: type,
      data: data,
      header: head,
      timeout:timeout,
      //接口请求到了
      success: res => {
        success(res)
      },
      //请求地址出问题
      fail: res => {
        wx.showToast({
          title: '网络异常请重试',
          icon: 'none'
        })
      }
    })
  }).catch((e) => { })
  return p;
}


 //判断用户是否登录
 let islogin = () => {
  var p = new Promise(function (resolve, reject) {
     //检测是否登录
     var userId = wx.getStorageSync('userId')
     //已登录
     if(userId){
       wx.hideLoading()
     }else{
      wx.hideLoading()
       //未登录
       wx.redirectTo({
         url: '../index/index'
       })
     }
    
  }).catch((e) => { })
  return p;
}

module.exports = {
  api,
  islogin
}