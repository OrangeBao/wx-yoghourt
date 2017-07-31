//app.js
var urlHelper = require('./utils/urlHelper');
// rewrite request
// wx.request = function(options) {
//   if (options && options.success) {
//     options.success = function(res) {
//       if (res.data && res.data.yogCode) {
//         if (options.fail) {
//           options.fail(res.data)
//         } else {
//           console.error(res.data);
//         }
//       }
//     }
//   }
//    wx.request(options);
// }

App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    this.getUserInfo();
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login(
        {
          success: function (res) {
            if (res.code) {
              //发起网络请求
              wx.request({
                url: urlHelper.getUrl('/onLogin'),
                data: {
                  code: res.code
                },
                success: function(data) {
                  const keys = JSON.parse(data.data);
                  that.globalData.openId = keys.openid;
                  wx.getUserInfo({
                    withCredentials: false,
                    success: function (res) {
                      that.globalData.userInfo = res.userInfo
                    }
                  })
                },
                fail: function(err) {
                  console.log(err);
                },
                complete: function(err) {
                  console.log(err);
                }
              })
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        }
      );
    }
  },

  globalData: {
    userInfo: null,
    openId: null
  }
})
