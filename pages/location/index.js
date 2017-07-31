// pages/location/index.js
var urlHelper = require('../../utils/urlHelper');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [],
    type: null,
    pageType: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
    });
    this.updateAddressList();
  },

  updateAddressList: function(cb) {
    const that = this;
    wx.request({
      url: urlHelper.getUrl('/getAllAddress'),
      data: {
        openId: app.globalData.openId
      },
      success: function (data) {
        that.setData({
          addressList: data.data,
          pageType: 1
        });
        cb && cb();
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

  editAddress: function(event) {
    let index = event.currentTarget.dataset.index;
    let data = this.data.addressList[index];
    wx.navigateTo({
      url: '../addressEdit/index?query=' + JSON.stringify(data),
    })
  },
  
  addNewAddress: function(event) {
    wx.navigateTo({
      url: '../addressEdit/index',
    })
  },


  selectThis: function (event) {
    if (this.data.type) {
      const index = event.currentTarget.dataset.index;
      const pages = getCurrentPages();
      const prePage = pages[pages.length - 2]
      if (prePage) {
        prePage.callback && prePage.callback(this.data.addressList[index]);
      }
      wx.navigateBack({
        delta: 1
      })
    }
  }
})