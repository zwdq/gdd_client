Page({
  data: {
  listData:[
  {"task":"任务A","city":"公司A","money":"上海普陀","time":"水泥工"},
  {"task":"任务B","city":"公司B","money":"上海杨浦","time":"地毯工"},
  {"task":"任务C","city":"公司C","money":"上海奉贤","time":"运输工"}
  ]
  },
  onLoad: function () {
  console.log('onLoad') 
  },


  toMyJob: function(e) {
    wx.navigateTo({
        url: '/pages/myjob/index',
    });
  }


 })
 