
// TODO 订单显示数量在图标上

const app = getApp()

Page({
    data: {
        userInfo: {},
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
    }
    
})