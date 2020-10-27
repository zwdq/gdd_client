

const app = getApp()
Page({
    data: {
    id:null
    },
    //从服务器读取任务大厅里选中的某个任务的详情
    onLoad: function (options) {
      this.setData({id: options.id})
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8362/update_database_task/showtaskinfo',
        data:{id: options.id},
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          //console.log('123');
          //console.log(res.data.data);
          _this.setData({
            testdata: res.data.data[0],
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
            })
          
        }
      })
      //this.jiedanflag()
    },

    //实时渲染
    onShow: function (options) {
     this.jiedanflag()
    },

    jiedan: function (options) {
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8362/update_database_task/jiedan',
        data:{
          id: this.data.id,
          appid: app.globalData.appid,
        },
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) { 
           //console.log('前段发来的返回是'+ res.data.data); 
           if(res.data.data == 'submit_fail'){
              wx.showModal({title: '接单失败，请提交个人信息'})
           } 
           else if(res.data.data == 'laowu_submit_fail'){
            wx.showModal({title: '接单失败，请绑定劳务公司'})
           }
           else if(res.data.data == 'login_fail'){
            wx.showModal({title: '接单失败，请先登录'})
           }
           else{wx.showModal({title: '接单成功'})
           }
        },
   
      })
      this.jiedanflag()
    },

    quxiaojiedan: function (options) {
      var _this = this;
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8362/update_database_task/quxiaojiedan',
        data:{
          id: this.data.id,
          appid: app.globalData.appid,
        },
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",
        success: function (res) {
          if(res.data.data == '401_fail'){
            wx.showModal({title: '客户公司已接收，请联系客服取消'})
          } 
          else{wx.showModal({
            title: '取消接单成功'})}
        }
        
      })
      this.jiedanflag()
      
    },
    ///
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
          //console.log('123');
          //console.log(res.data.data);
          _this.setData({
            jiedanflag: res.data.data[0],
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
            })
          
        }
      })
  
    },

  })