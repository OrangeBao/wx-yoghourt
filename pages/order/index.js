var urlHelper = require('../../utils/urlHelper');
var app = getApp();
var SYS = require('../../utils/emitter');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [],
    pageType: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    SYS.subscribe(function () {
      wx.request({
        url: urlHelper.getUrl('/getAllOrders'),
        data: {
          openId: app.globalData.openId
        },
        success: function (response) {
          that.setData({
            orderList: response.data,
            pageType: 1
          });
        }
      });
    });
    SYS.publish();
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})