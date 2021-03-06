//index.js
//获取应用实例
var urlHelper = require('../../utils/urlHelper');
var app = getApp()
Page({
  data: {
    motto: '酸奶',
    production: null,
    order: {},
    total: 0
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    let that = this;
    wx.request({
      url: urlHelper.getUrl('/getAllProductions'),
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
       that.setData({
         production: response.data
       });
      },
      fail: function(err) {
        console.log(err);
      },
      complete: function(res) {
        console.log(res);
      }
    })
  },
  countAdd: function(event) {
    let proId = event.currentTarget.dataset.productionId;
    let order = this.data.order;
    if (!order[proId]) order[proId] = 0;
    order[proId] ++;
    this.setData({
      order,
      total: this.data.total + 1 
    });
  },
  countReduce: function(event) {
    let proId = event.currentTarget.dataset.productionId;
    let order = this.data.order;
    order[proId] --;
    this.setData({
      order,
      total: this.data.total - 1 
    });
  },

  goToConfirm: function(event) {
    const orderDetails = [];
    const order = this.data.order;
    const production = this.data.production;
    Object.keys(order).map(function(key) {
      if (order[key]) {
        const pro = production.filter(function(item) {
          return item.productionId == key
        })[0];
        if (pro) {
          orderDetails.push(Object.assign({}, pro, { count: order[key]}));
        }
      }
    });
    wx.navigateTo({
      url: '../confirm/index?query=' + JSON.stringify(orderDetails),
    })
  }
})
