import * as echarts from '../../ec-canvas/echarts';



// 评价因子数值
var datas = [5, 20, 36, 10, 10, 20, 20, 5, 20, 20, 36, 10, 10, 20, 5]

// 评价因子
var dataFactor = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "衬衫", "羊毛衫", "雪纺衫"]


// pages/friend/friend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [{
        studentName: "姓名",
        schoolName: "学校",
        professional: "专业",
        avater: '../../assets/person/person.png',
        datas: datas,
        dataFactor: dataFactor,
        sex: "女"
      },
      {
        studentName: "姓名1",
        schoolName: "学校1",
        professional: "专业1",
        avater: '../../assets/person/person.png',
        datas: datas,
        dataFactor: dataFactor,
        sex: "男"
      }

    ]
  },

  sexName: function() {
    if(this.data.sex == "女"){
      return "她"
    }else{
      return "他"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})

function barChart(datas) {
  var dataOPtion = [];
  for (let i = 0; i < datas.length; i++) {
    if (i < 3) {
      dataOPtion.push({
        value: datas[i],
        itemStyle: {
          color: colors[0]
        }
      })
    } else if (i >= 3 && i < 6) {
      dataOPtion.push({
        value: datas[i],
        itemStyle: {
          color: colors[1]
        }
      })
    } else if (i >= 6 && i < 9) {
      dataOPtion.push({
        value: datas[i],
        itemStyle: {
          color: colors[2]
        }
      })
    } else if (i >= 9 && i < 12) {
      dataOPtion.push({
        value: datas[i],
        itemStyle: {
          color: colors[3]
        }
      })
    } else if (i >= 12 && i < 15) {
      dataOPtion.push({
        value: datas[i],
        itemStyle: {
          color: colors[4]
        }
      })
    }
  }
  return {
    title: {
      text: '评价排行',
      left: '40%',
      textStyle: {
        fontSize: 14
      }
    },
    legend: {
      data: ['销量']
    },
    label: {
      show: true,
      position: 'outside',
    },
    xAxis: {
      data: dataFactor,
      axisLabel: {
        interval: 0,
        rotate: -90
      },
      axisTick: {
        show: false
      },

    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: dataOPtion
    }]
  }
}