// pages/test/test.js
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

// 颜色
var colors = ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"]
// 综合分析能力数据
var pieData = [{
  value: 55,
  name: '北京'
}, {
  value: 20,
  name: '武汉'
}, {
  value: 10,
  name: '杭州'
}, {
  value: 20,
  name: '广州'
}, {
  value: 38,
  name: '上海'
}]

// 认可度最高的标签
var circleData = [
  {
    factor:"争强好胜",
    count:10,
    evaluationCount:8,
    color:'',
  },
  {
    factor: "好奇心宝宝",
    count: 10,
    evaluationCount: 7,
    color: '',
  },
  {
    factor: "踏实稳重",
    count: 10,
    evaluationCount: 6,
    color: '',
  },
  {
    factor: "争强好胜",
    count: 10,
    evaluationCount: 6,
    color: '',
  },
  {
    factor: "好奇心宝宝",
    count: 10,
    evaluationCount: 4,
    color: '',
  },
  {
    factor: "争强好胜",
    count: 10,
    evaluationCount: 6,
    color: '',
  }
]

// 好友印象细分标签

// 评价因子数值
var friedIImpress = {
  span:"人格魅力",
  subspan:"Charisma",
  xdatas: [5, 20, 36, 10, 10, 20],
  ydataFactor: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
}



// 饼图
function pieChart(chart, pieData) {
  var option = {
    backgroundColor: "#ffffff",
    color: colors,
    series: [{
      radius: ['35%', '60%'],
      type: 'pie',
      label: {
        formatter: '{c}%\n\n{b} '
      },
      data: pieData
    }]
  }
  chart.setOption(option);
};


// 好友头像
var friendAvater = [
  "../../assets/person/person.png",
  "../../assets/person/person.png",
  "../../assets/person/person.png",
  "../../assets/person/person.png",
  "../../assets/person/person.png"
]


Page({


  data: {

    friendAvater: friendAvater,
    pieData: [],
    circleData: circleData,
    friedIImpress: friedIImpress,
    // 饼图
    ecpie: {
      lazyLoad: true
    },

    //  柱状图
    ecbar: {
      lazyLoad: true
    },

  },



// 综合分析能力数据设置
  getOneOPtion() {
    this.setData({
      pieData: pieData
    })
    this.init_One(this.data.pieData, this.data.pieDataVal)
  },

  init_one(barData, barDataVal) { //初始化第一个图表
    this.oneComponent.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      barChart(chart, barData, barDataVal) //赋值给echart图表
      this.chart = chart;
      return chart;
    });
  },

  init_One(pieData) { //初始化第一个图表
    this.OneComponent.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      pieChart(chart, pieData) //赋值给echart图表
      this.chart = chart;
      return chart;
    });
  },

  // 颜色设置
  changeColor(){
    let circleData = this.data.circleData;
    console.log(circleData)
    let index = null
    for (index in circleData){
      circleData[index].color = colors[index]
      console.log(circleData[index].color)
    }
    this.setData({
      circleData: circleData
    })
    console.log(this.data.circleData)
  },

  onLoad() {

    this.OneComponent = this.selectComponent('#mychart-dom-pie');
    this.getOneOPtion();
    this.changeColor()
  }

})