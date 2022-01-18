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
    url: 'http://192.165.0.31/device_jk',
    publicKey : 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPI12EQfJrbzjV6XKo3Ei9VGDZjpvPYJ01Ypt4veeiWNTjdYoHDNXNe6N5wQ/jV1+g4jPivYCh7GoPTSvJWn7e9b6NGofNrkQjuStNNvqvlCFHyUUoONZAzrO7qB5ggQpKUa6ptp/xxnuvcGR/0MP2o2HVWwA0ehHakimIqFECfQIDAQAB',
    privateKey : 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAM8jXYRB8mtvONXpcqjcSL1UYNmOm89gnTVim3i956JY1ON1igcM1c17o3nBD+NXX6DiM+K9gKHsag9NK8laft71vo0ah82uRCO5K002+q+UIUfJRSg41kDOs7uoHmCBCkpRrqm2n/HGe69wZH/Qw/ajYdVbADR6EdqSKYioUQJ9AgMBAAECgYEAzVFPw+YeZdGEM7zHk4tuaoS1z1AlL0Sj76PDWcZbULfepWv/mgdl8d0o6Gmu1vjnaDBvn8OZOmd9pZcn3NlfwNau5L3cH+5Tm+RQWeO80EJzLc880nHUGV25+rH4Q6c70S/pIoNnlx+TgszLILOvC4y0Z//IbtxdD3v5sG0ptz0CQQDnfku7v060CZ9XFFa1ty+6rI0wFyJ0m7QmM8ySrGz7eKL4WhjplKKoK3wyo5e3hOmklYqJLv4ge2Wuzwvh4alTAkEA5REE2RdYSeDg084iuX8ZuM3zvh1ZovVG3uzVQn4sWbauF7/xjtR3aKSEP2WrrbnNeV+nGeav8OVjU+AMXRia7wJANH1CltON+OyloI0QDCv5Oo6dhOX5/g7ADll4bVmDbJGyAjYLqAr3xsH1a1YEtKwCfjsaKnjpTlwsdjKkMxeD2QJAQJ6kd3mWdoDx685jDWFFqFSxRhiRiN8YtxqorrFZYZWfVyPWySw241ZF2HyeCcw4otzRDwV87MBJXQf/dOPUEQJAVf4W60IGjjNjHhcabo1YGgjpl8/2UUG42ujbcH7a4IGhM1yD07X8yrbO76dSOY5rvMMyaoYAr0LUkH0Y24Rc6w==',
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight']
  }
})
