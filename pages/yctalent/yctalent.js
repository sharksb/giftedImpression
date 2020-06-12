// pages/yctalent/yctalent.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList:[],
    isApply:false
  },


  afterRead(event){
    console.log(event.detail.file.path)
    let fileList = this.data.fileList
    fileList.push(event.detail.file.path)
    this.setData({
      fileList: fileList
    })
  },

  apply(){
   let fileList = this.data.fileList
    if (fileList == ""){
      Toast('请上传图片');
    }else{
      // 调取上传图片的接口
      this.setData({
        isApply:true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})