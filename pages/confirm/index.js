// pages/confirm/index.js
var urlHelper = require('../../utils/urlHelper');
var app = getApp()
var SYS = require('../../utils/emitter');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [],
    address: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const query = JSON.parse(options.query);
    this.setData({
      orders: query,
      money: query.reduce((d, o) => {
        return d + o.price * o.count;
      }, 0)
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
  
  },

  selectAddress: function() {
    wx.navigateTo({
      url: '../location/index?type=1',
    })
  },

  callback: function(address) {
    this.setData({
      address
    });
  },

  placeOrder: function(address) {
    const order = {
      count: this.data.orders.length,
      desc: this.data.orders.reduce((d, o) => {
        return d + o.title + ' ' + o.count + '份；';
      }, ''),
      money: this.data.money,
      statue: 0,
      addressId: this.data.address.addressId
    };
    wx.request({
      url: urlHelper.getUrl('/addOrder'),
      data: Object.assign({ openId: app.globalData.openId}, order),
      success: function(data) {
        SYS.publish();
        wx.switchTab({
          url: '../order/index'
        });
      }
    })
  }
})