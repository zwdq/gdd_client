const app = getApp()

Page({
    data: {
    },

    submit: function (e) {
    
     this.setData({
      name:e.detail.value.name,
      certid:e.detail.value.certid,
      city:e.detail.value.city,
      phone1:e.detail.value.phone1,
      phone2:e.detail.value.phone2,
      marriage:e.detail.value.marriage,
      shoukuan:e.detail.value.shoukuan,
      cate1:e.detail.value.cate1,
      cate2:e.detail.value.cate2,
      gender:e.detail.value.gender,
      workexp:e.detail.value.workexp,
      leaderexp:e.detail.value.leaderexp,
      workcate:e.detail.value.workcate,
      daynight:e.detail.value.daynight,
      is_repair:e.detail.value.is_repair,
      appid: app.globalData.appid,
     })
     this.fashe();
    },

  fashe: function () {
    var _this = this;

    //console.log('上传的数据是：', this.data);
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8362/update_database_task/add1',
      header: { "content-type": "application/x-www-form-urlencoded" },
      method:"POST",
      data: this.data,
      success: function (res) {
        //var result = res.data;
        wx.showModal({
          title: '修改信息成功',
          content: '每次点此按钮请重新绑定劳务公司',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');                   
            } 
            else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },

  
  onLoad: function () {
    var _this = this;
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8362/update_database_task/show1',
      header: { "content-type": "application/x-www-form-urlencoded" },
      data: {
        'appid':app.globalData.appid,
        },
      method:"POST",
  
      success: function (res) {
        console.log(res.data.data);
        _this.setData({
          testdata: res.data.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          })
        
      }
    })
  },

  onShow: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      code: app.globalData.code,
      appid: app.globalData.appid,
    })
  },

})
