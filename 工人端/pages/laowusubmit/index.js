const app = getApp()

Page({
  data: {
  id:"",
  fbdw:"",
  },

 
  toFindJob: function(e) {
    let id = e.detail.id;
    let fbdw = e.detail.fbdw;
    wx.navigateTo({
        url: '/pages/findjob/index?id='+ id + '&fbdw=' + fbdw
    });
  },

  onShow: function () {
    var _this = this;
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8362/update_database_laowu/showallcompany',
      header: { "content-type": "application/x-www-form-urlencoded" },
      method:"POST",
  
      success: function (res) {
        console.log(res.data.data);
        _this.setData({
          testdata: res.data.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          })
        
      }
    });
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8362/update_database_laowu/showmycompany',
      header: { "content-type": "application/x-www-form-urlencoded" },
      method:"POST",
      data:{'appid':app.globalData.appid},
      success: function (res) {
        console.log(res.data.data);
        _this.setData({
          laowudata: res.data.data[0],
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          })
        
      }
    })
  },

})
 
 