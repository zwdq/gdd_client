

const app = getApp()
Page({
    data: {
    id:null
    },
    onLoad: function (options) {
      this.setData({id: options.id})
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8364/update_database_findjob/show',
        data:{id: options.id},
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          //console.log(res.data.header);
          _this.setData({
            testdata: res.data.data,
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
            })
          
        }
      })
    },




  })