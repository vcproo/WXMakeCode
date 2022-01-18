/*
 * @Author: your name
 * @Date: 2022-01-18 16:16:53
 * @LastEditTime: 2022-01-18 17:22:22
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \WXMakeCode\app.js
 */
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    url: '',
    publicKey : '',
    privateKey : '',
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight']
  }
})
