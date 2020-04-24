// pages/index/index.js
import Dialog from '../../@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isfocus:false
  },

  formSubmit(event){
    console.log(event);
    let username = event.detail.value.userName;
    let userProfessional = event.detail.value.userProfessional;
    let userMoible = event.detail.value.userMoible;
    let userSchool = event.detail.value.userMoible;
    if (username == "" && userProfessional == "" && userMoible == "" && userSchool==""){
      wx.createSelectorQuery().select('#j_page').boundingClientRect(function (rect) {
        // 使页面滚动到底部
        wx.pageScrollTo({
          scrollTop: rect.bottom
        })
      }).exec();
     
    };
    if (username == ""){
      this.setData({
        isfocus: true
      })
      Dialog.alert({
        message: '请输入您的姓名'
      }).then(() => {
        // on close
      });
      
    }  else if (userMoible == ""){
      Dialog.alert({
        message: '请输入您的手机号'
      }).then(() => {
        // on close
      });
    } else if (userSchool == ""){
      Dialog.alert({
        message: '请输入您的学校'
      }).then(() => {
        // on close
      });
    } else if (userProfessional == "") {
      Dialog.alert({
        message: '请输入您的专业'
      }).then(() => {
        // on close
      });
    }else{
      console.log("将参数传入接口跳转")
    }
  
  },

  inputPnoneNumer(event){
    console.log(event);
    let numberPhone = event.detail.value;
    if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(numberPhone)) {
      Dialog.alert({
        message: '请输入正确的手机格式'
      }).then(() => {
        // on close
      });
      return false;
    }
  }
})