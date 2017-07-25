// pages/addressEdit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    sex: 1,
    phone: null,
    address: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options = {}) {
    let query = JSON.parse(options.query);
    this.setData(query);
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

  getLocation: function() {
    let that = this;
     wx.chooseLocation({
      success: function(obj) {
        that.setData({
          address: obj.address + ' ' + obj.name,
        });
      },
      cancel: function(e) {
        console.log(JSON.stringify(e));
      },
      fail: function(e) {
        console.log(JSON.stringify(e));
      }
    });
  }
})