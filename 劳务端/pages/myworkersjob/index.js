

const app = getApp()
Page({
    data: {
    id:null
    },
    onLoad: function (options) {
      this.setData({id: options.id})
      var _this = this;
      //testdata是order_workers表，订单上显示的客户详情
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/showorder1',
        data:{id: options.id},
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          console.log('标记1');
          console.log(res.data.data[0]);
          _this.setData({
            testdata: res.data.data[0],
            })
          
        }
      })
      //testdata2是order表，订单上显示的客户详情
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/showorder2',
        data:{id: options.id},
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",

        success: function (res) {
          console.log('标记2');
          console.log(res.data.data[0]);
          _this.setData({
            testdata2: res.data.data[0],
            })
          
        }
      })
    },
    chakan: function(e) {
      let id = this.data.id;
      let number = this.data.testdata.number;
      wx.navigateTo({
          url: '/pages/jiedanworkers/index?id='+ id + '&number=' + number    
      });
    },
    //url: '/pages/test2/test2?nameData=' + that.data.name + '&ageData=' + that.data.age



  })