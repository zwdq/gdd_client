const app = getApp()

Page({

    data: {
      account: "",
      password: "",
    },

    submit: function (e) {
     var _this = this;
     let { 
      account,
      password,
      } = e.detail.value;
  
     this.setData({
      account,
      password,
     })
     this.fashe();
    },

  fashe: function () {
    var _this = this;
   
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/login2',
      header: { "content-type": "application/x-www-form-urlencoded" },
      method:"POST",
      data: this.data,
      success: function (res) {
        app.globalData.appid = res.data.data;
        console.log('openid1为' + JSON.stringify(res.data.data));
        
        if(app.globalData.appid != ''){
        wx.showModal({
          title: '登陆成功',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              wx.switchTab({
                url: '/pages/page3/index',    //这里填入要跳转目的页面的url
                success: (result) => {
                  console.log("跳转到首页");
                },
                fail: () => {}
              });
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })   
      }else{wx.showModal({
        title: '登陆失败',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })  
      }
      },
    
    });
  }
})
