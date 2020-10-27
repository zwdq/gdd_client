// pages/ucenter/Uploadimagepage.js
Page({
  data: {
    uploadedImages: [],
    imgBoolean: [true, true, true]
  },
  onLoad: function (options) {
    var that = this;
  },
  chooseImage: function (event) {
    var that = this;
    var IND=event.currentTarget.dataset.index
    // 选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          ["uploadedImages["+event.currentTarget.dataset.index+"]"]: tempFilePaths[0],
          ["imgBoolean["+event.currentTarget.dataset.index+"]"]: false,

        });
      }
    })

  },
  // 图片预览
  previewImage: function (event) {
    var current = event.target.dataset.src
    wx.previewImage({
      current: current,
      urls: [current]
    })
console.log(current)


  },
  //删除图片
  deleteImg: function (event) {
    var that = this;
    var image = that.data.uploadedImages[event.currentTarget.dataset.index];
    that.setData({
      ["uploadedImages["+event.currentTarget.dataset.index+"]"]: image,
      ["imgBoolean["+event.currentTarget.dataset.index+"]"]: true,
    });
  },
  submit: function () {
  },
})