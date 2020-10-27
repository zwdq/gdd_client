
// TODO 订单显示数量在图标上

const app = getApp()

Page({
    data: {
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        status: {},
        
    },

    toSubmit: function(e) {
        wx.navigateTo({
            url: '/pages/submit/index',
        });
    },

    toMyScore: function(e) {
        wx.navigateTo({
            url: '/pages/myscore/index',
        });
    },
    tolaowulist: function(e) {
      wx.navigateTo({
          url: '/pages/laowulist/index',
      });
  },
  toLogin: function(e) {
    wx.navigateTo({
        url: '/pages/login/index',
    });
},
    Uploadimagepage: function (e) {
        wx.navigateTo({
            url: '/pages/Uploadimage/index',
        });
    },


    onLoad: function () {
        var that = this;
        // 查看是否授权
        wx.getSetting({
          success: function (res) {
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                success: function (res) {
                  // 用户已经授权过,调用微信的 wx.login 接口，从而获取code,再直接跳转到主页
                  wx.login({
                    success: res => {
                      // 获取到用户的 code 之后：res.code
                      console.log("用户的code:" + res.code);
                    }
                  });
                  wx.switchTab({
                    url: '/pages/page1/index2',    //这里填入要跳转目的页面的url
                    success: (result) => {
                      console.log("跳转到首页");
                    },
                    fail: () => {}
                  });
                }
              });
            } else {
              // 用户没有授权，显示授权页面,这里不进行操作
            }
          }
        });
      },


      onShow: function () {
        this.setData({
          userInfo: app.globalData.userInfo,
          code: app.globalData.code,
          appid: app.globalData.appid,
        })
      },
})


