//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '酸奶',
    production: [
      {
        title: '向日葵酸奶',
        monthSall: 10,
        price: 15,
        productionId: 0,
        imgSrc: '../../assert/title.png'
      },
      {
        title: '蔓越莓酸奶',
        monthSall: 100,
        price: 17,
        productionId: 1,
        imgSrc: '../../assert/title.png'
      },
      {
        title: '葡萄干酸奶',
        monthSall: 10,
        price: 20,
        productionId: 2,
        imgSrc: '../../assert/title.png'
      },
      {
        title: '纯酸奶',
        monthSall: 8,
        price: 8,
        productionId: 3,
        imgSrc: '../../assert/title.png'
      }
    ],
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
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
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
