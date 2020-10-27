

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
        url: 'https://www.bluelinggdd.xyz:8364/update_database_task/showtaskinfo',
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


  })