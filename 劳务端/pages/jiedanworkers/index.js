const app = getApp()

Page({
  data: {
  id:"",
  fbdw:"",
  number:"",  
  },


  onLoad: function (options) {
    this.setData({id: options.id,number:options.number})
    var _this = this;
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/showmyjiedanworkers',
      data: {
        appid: app.globalData.appid,
        id:this.data.id,
      },
      header: { "content-type": "application/x-www-form-urlencoded" },
      method:"POST",
  
      success: function (res) {
        console.log(res.data);
        _this.setData({
          testdata: res.data.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          })
        
      }
    })
  },

  //实时显示自己已经推送了哪些工人
  onShow: function (options) {
    this.geiinfo()
    
  },

  geiinfo: function (options){
    var _this = this;
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/showmytuisongworkers',
      data: {
        appid: app.globalData.appid,
        id:this.data.id,
      },
      header: { "content-type": "application/x-www-form-urlencoded" },
      method:"POST",
  
      success: function (res) {
        console.log('标记3');
        console.log(res.data);
        _this.setData({
          testdata2: res.data.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          })
  
      }
    })
  },


  
  checkboxChange(e) {
    //根据选中与否进行判断
    const testdata = this.data.testdata
    const values = e.detail.value
    for (let i = 0, lenI = testdata.length; i < lenI; ++i) {
      testdata[i].ts_flag = '201'

      for (let j = 0, lenJ = testdata.length; j < lenJ; ++j) {
        if (testdata[i].appid === values[j]) {
          testdata[i].ts_flag = '301'
          break
        }
      }
    }

    this.setData({
      testdata
    }) 

    console.log('checkbox发生change事件11，携带value值为：', this.data.testdata);

  },
  
  
  submit: function (options) {
    const testdata = this.data.testdata
    //首先判断301的个数，即判断劳务公司在checkbox里面勾选了几个工人,用n表示
    let n = 0
    for (let i = 0, lenI = testdata.length; i < lenI; ++i) {
      if(testdata[i].ts_flag == '301'){n = n + 1}
    }
    console.log('checkbox发生change事件12，携带value值为：', n);
    //如果勾选工人数n等于所需人数this.data.number,则向服务器推送
    if(n == this.data.number){

        for (let i = 0, lenI = testdata.length; i < lenI; ++i) {
          wx.request({
            url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/zhipaiworkers',
            data: {
              ts_flag: testdata[i].ts_flag,
              appid: testdata[i].appid,
              id:this.data.id,
            },
            header: { "content-type": "application/x-www-form-urlencoded" },
            method:"POST",
        
            success: function (res) {              
              
                //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
                }
              
            })
      }
      wx.showModal({title: '已成功推送工人给客户公司'})
      this.geiinfo()
      }
    else if(n > this.data.number){wx.showModal({title: '推送人数过多'})}
    else if(n < this.data.number & n > 0){wx.showModal({title: '推送人数过少'})}
    else if(n == 0){wx.showModal({title: '未推送任何工人，请勾选'})}
  },



  quxiaosubmit: function (options) {
    
      wx.request({
        url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/quxiaozhipaiworkers',
        data: {
          appid: app.globalData.appid,
          id:this.data.id,
        },
        header: { "content-type": "application/x-www-form-urlencoded" },
        method:"POST",
    
        success: function (res) {              
          wx.showModal({title: '已取消推送工人给客户公司'})
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
            }
          
        })
      
      this.geiinfo()
    },

  
})
 
 