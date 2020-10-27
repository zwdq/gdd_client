

const app = getApp()
Page({
    data: {
    id:null,
    laowu_zzjgdm:null,
    testdata: null
    },
    onLoad: function (options) {
      this.setData({laowu_zzjgdm: options.laowu_zzjgdm,laowu_name: options.laowu_name})
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8362/update_database_laowu/infoshow',
        data:{laowu_zzjgdm: options.laowu_zzjgdm},
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          //console.log(res.data);
          _this.setData({
            testdata: res.data.data[0]
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
            })
          
        }
      })
    },

    onShow: function (options) {
      this.bangdingflag()
    },

    bangding: function (options) {
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8362/update_database_task/bangding',
        data:{
          laowu_appid: this.data.testdata.laowu_appid,
          laowu_name: this.data.testdata.laowu_name,
          appid: app.globalData.appid,
        },
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          wx.showModal({
            title: '绑定成功'})      
        }
      })
      this.bangdingflag()
    },


    quxiaobangding: function (options) {
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8362/update_database_task/quxiaobangding',
        data:{
          id: this.data.id,
          appid: app.globalData.appid,
        },
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          wx.showModal({
            title: '取消绑定成功'})      
        }
      })
      this.bangdingflag()
    },

//判断是否已经接单
    jiedanflag: function (options) {
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8362/update_database_task/showjiedanflag',
        data:{id: this.data.id,
              appid: app.globalData.appid},
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          console.log('123');
          console.log(res.data.data);
          _this.setData({
            jiedanflag: res.data.data[0],
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
            })
          
        }
      })
  
    },

    //判断是否已经绑定
    bangdingflag: function (options) {
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8362/update_database_laowu/showbangdingflag',
        data:{appid: app.globalData.appid,
        laowu_name:this.data.laowu_name},
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          console.log('123');
          console.log(res.data.data);
          _this.setData({
            bangdingflag: res.data.data[0],
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
            })
          
        }
      })
  
    },
  })