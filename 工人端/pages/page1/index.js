Page({
  data: {
  id:"",
  fbdw:"",
  region: [],
  detailed1: '请选择',
  detailed2: '请选择',
  detailed3: '请选择',
  detailed4: '请选择',
  array2: ['小于300','300到500','500到1000','1000以上','不限制金额'],
  array1: ['水电工','木工','泥工','瓦工','杂务工','油漆工','不限制'],
  array3: ['日班','夜班','不限制'],
  array4: ['按价格正序','按价格倒序','按编号正序','按编号倒序','不限制'],
  index: 0
  },


  pickChange1:function(e){
    this.setData({
      detailed1:this.data.array1[e.detail.value]
    });
    //选不限制时，把值转变为空字符串，用于后端的like操作
 
    this.getdata();
  },

  pickChange2:function(e){
    this.setData({
      detailed2:this.data.array2[e.detail.value]
    });
    this.getdata();
  },

  pickChange3:function(e){
    this.setData({
      detailed3:this.data.array3[e.detail.value]
    });
    //选不限制时，把值转变为空字符串，用于后端的like操作
   
    this.getdata();
  },
  
  pickChange4:function(e){
    this.setData({
      detailed4:this.data.array4[e.detail.value]
    });
    //选不限制时，把值转变为空字符串，用于后端的like操作
   
    this.getdata();
  },
  


  onShow: function () {
    this.getdata();
  },

  getdata: function () {
    var _this = this;
    wx.request({
      url: 'https://www.bluelinggdd.xyz:8362/update_database_task/select',
      header: { "content-type": "application/x-www-form-urlencoded" },
      data: {
        array1: this.data.detailed1,
        array2: this.data.detailed2,
        array3: this.data.detailed3,
        array4: this.data.detailed4},
      method:"POST",
  
      success: function (res) {
        _this.setData({
          testdata: res.data.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          })
        
      }
    })
  },

})
 
 