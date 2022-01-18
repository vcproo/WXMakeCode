const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}
const app = getApp()
const Encrypt = require('./jsencrypt.min.js');
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
//RSA加密 字符串不能为数字类型
function Rsa_encode(str){
  let encryptor = new Encrypt.JSEncrypt();
  encryptor.setPublicKey(app.globalData.publicKey) // 设置公钥
  var enstr = encryptor.encrypt(str) // 对需要加密的数据进行加密
  return enstr
}
//RSA解密 
function Rsa_decode(str){
  const decryptor = new Encrypt.JSEncrypt();
  decryptor.setPrivateKey(app.globalData.privateKey)
  var deStr = decryptor.decrypt(str)
  return deStr
}
//防止连续点击
function buttonClicked(self) {
  self.setData({
    buttonClicked: true
  })
  setTimeout(function () {
    self.setData({
      buttonClicked: false
    })
  }, 1500)
}
function dateTime(time){//time 时间戳
  var timestamp = Date.parse(time||new Date());
  // console.log(timestamp)//当前时间戳
  var date = new Date(timestamp);
  var Y =date.getFullYear();
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var date = Y+'-'+M+'-'+D
  return date
}

module.exports = {
  dateTime,
  formatTime,
  Rsa_encode,
  Rsa_decode,
  buttonClicked:buttonClicked
}

