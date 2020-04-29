// pages/sharePage/sharePage.js

// 好友评价信息
var friendEvaluations = [{
  friendAvater: '../../assets/person/person.png',
  friendName: '昵称',
  time: '2020.04.20',
  evaluations: ['非常有爱心', '稳重踏实', '非常有爱心', '稳重踏实', '稳重踏实']
},

{
  friendAvater: '../../assets/person/person.png',
  friendName: '昵称',
  time: '2020.04.20',
  evaluations: ['非常有爱心', '稳重踏实', '非常有爱心', '稳重踏实', '稳重踏实']
},
]

// 个人信息
var personInfo = {
  name:"xxx",
  avater:'../../assets/person/person.png',
  friedboost:50
}



Page({

  /**
   * 页面的初始数据
   */
  data: {
    friendEvaluations: friendEvaluations,
    progress: 0,
    unprogress: 0,
    personInfo: personInfo,
    weflares: [
      {
        title: "能力报告",
        status: false
      },
      {
        title: "简历指导",
        status: false
      },
      {
        title: "1V1\n点评",
        status: false
      },
      {
        title: "导师优化",
        status: false
      }
    ]
  },

  computePersons() {
    let persons = this.data.personInfo.friedboost;
    let weflares = this.data.weflares
    let processVal = null;
    let unprocessVal = null;
    let weflaresStatus = null;
    if (persons < 6) {
      console.log("人数小于6")
      this.computePercentage((persons - 0),6)
    } else if (persons >= 6 && persons < 15) {
      for(let i = 0;i<1;i++){
        weflares[i].status = true;
      }
      this.computePercentage((persons - 6),15-6)
    } else if (persons >= 15 && persons < 45) {
      for (let i = 0; i < 2; i++) {
        weflares[i].status = true;
      }
      this.computePercentage((persons - 15),45-15)
    } else if (persons >= 45 && persons < 99) {
      for (let i = 0; i < 3; i++) {
        weflares[i].status = true;
      }
      this.computePercentage((persons - 45),99-45)
    } else if (persons >= 99) {
      for (let i = 0; i < 4; i++) {
        weflares[i].status = true;
      }
      processVal = 1
      unprocessVal = 0
      this.setData({
        progress: processVal,
        unprogress: unprocessVal
      })
    }
    this.setData({
      weflares: weflares
    })
  
  },

  computePercentage(item,count) {
    let processVal = null
    let unprocessVal = null
    if (item == 0) {
      processVal = 0
    } else if (item == 1){
      processVal = 0.5
    }else{
      processVal = item / count*0.5 +0.5
    }
   
    unprocessVal = ((1 - processVal) * 100).toFixed(2)
    this.setData({
      progress: processVal,
      unprogress: unprocessVal
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.computePersons();
  },

})