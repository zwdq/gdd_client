const app = getApp()

Page({
  data: {
  id:"",
  fbdw:"",
  region: [],
  detailed: '请选择',
  detailed2: '请选择',
  detailed3: '请选择',
  customItem:["全部"],
  clas: 'ccc',
  array2: ['工人已接单，劳务公司未推送','工人已接单，劳务公司已推送','客户已确认，正在完成中','任务完成','不限制'],
  },

  onLoad: function () {
  console.log('onLoad') 
  },
 


  pickChange2:function(e){
    this.setData({
      detailed2:this.data.array2[e.detail.value],
      detailed2_1:e.detail.value
    });
    this.getdata();
  },

 

  onShow: function () {
    this.getdata();
  },

  getdata: function () {
    var _this = this;
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8364/update_database_laowu/showmyworkerstask',
      data: {appid: app.globalData.appid,array2:this.data.detailed2_1},
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
 
 
 
