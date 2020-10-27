const app = getApp()

Page({

    data: {
      laowu_name: "",
      laowu_zzjgdm: "",
      lxr_phone: "",
      lxr_name: "",
      bank_account: "",
      bank_name: "",
      bank_skr_name: ""
    },

    submit: function (e) {
     console.log('form发生了submit事件，携带数据为：', e.detail.value);

     let { 
      laowu_name,
      laowu_zzjgdm,
      lxr_phone,
      lxr_name,
      bank_account,
      bank_name,
      bank_skr_name
 } = e.detail.value;
  
     this.setData({
      laowu_name,
      laowu_zzjgdm,
      lxr_phone,
      lxr_name,
      bank_account,
      bank_name,
      bank_skr_name,
      appid: app.globalData.appid,
     })
    },

  fashe: function () {
    var _this = this;
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/add',
      header: { "content-type": "application/x-www-form-urlencoded" },
      method:"POST",
      data: this.data,
      success: function (res) {

        var result = res.data;
        wx.showModal({
          title: '这是收到的数据',
          content: JSON.stringify(res.data),
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
          
          
            } else if (res.cancel) {
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
      url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/show',
      header: { "content-type": "application/x-www-form-urlencoded" },
      data: {
        'appid':app.globalData.appid,
        },
      method:"POST",
  
      success: function (res) {
        _this.setData({
          testdata: res.data.data[0],
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
