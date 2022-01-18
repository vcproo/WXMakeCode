<!--
 * @Author: your name
 * @Date: 2022-01-18 16:13:22
 * @LastEditTime: 2022-01-18 16:42:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \WXMakeCode\README.md
-->
# WXMakeCode
微信端生成二维码（QRCode）并保存到相册 utils/weapp-qrcode.js
 - 此二维码不可通过微信扫一扫进入小程序 而是小程序内部有扫码功能，在内部扫码使用。如果是从外部扫码进入小程序需要后端生成。[参考链接](https://developers.weixin.qq.com/miniprogram/introduction/qrcode.html#%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D)


另外包括wx.request 封装好的请求 utils/https.js


当后端返回数据过大（后端离谱不分页时），前端上拉加载进行分页展示 pages/infolist.js
