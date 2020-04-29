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
  }, {
    value: 15,
    name: '湖州'
  }
]

// 认可度最高的标签
var circleData = [
  {
    factor: "争强好胜",
    count: 10,
    evaluationCount: 8,
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
  },
  {
    factor: "争强好胜",
    count: 10,
    evaluationCount: 6,

  },
  {
    factor: "好奇心宝宝",
    count: 10,
    evaluationCount: 4,
  },
  {
    factor: "争强好胜",
    count: 10,
    evaluationCount: 6,
  }
]

// 好友印象细分标签

// 评价因子数值
var friedIImpress = [
  {
    span: "人格魅力",
    subspan: "Charisma",
    xdatas: [5, 15, 20, 10, 10, 20],
    ydataFactor: ["衬衫衬衫衬衫", "羊毛衫羊毛衫", "雪纺衫雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  {
    span: "争强好胜",
    subspan: "Charisma",
    xdatas: [18, 18, 5, 7, 7, 7],
    ydataFactor: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },

  {
    span: "争强好胜",
    subspan: "Charisma",
    xdatas: [18, 18, 5, 7, 7, 7],
    ydataFactor: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  {
    span: "争强好胜",
    subspan: "Charisma",
    xdatas: [18, 18, 5, 7, 7, 7],
    ydataFactor: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  {
    span: "争强好胜",
    subspan: "Charisma",
    xdatas: [18, 18, 5, 7, 7, 7],
    ydataFactor: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  {
    span: "争强好胜",
    subspan: "Charisma",
    xdatas: [18, 18, 5, 7, 7, 7],
    ydataFactor: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
]



// 饼图
function pieChart(chart, pieData) {
  var option = {
    backgroundColor: "#ffffff",
    color: colors,
    graphic: [{ //环形图中间添加文字
      type: 'text', //通过不同top值可以设置上下显示
      left: 'center',
      top: '45%',
      style: {
        text: '优才印象' + '\n' + '测评',
        textAlign: 'center',
        fill: 'blue', //文字的颜色
        width: 30,
        height: 30,
        fontSize: 14,
        fontFamily: "Microsoft YaHei"
      }
    }],
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

    src2:'',
    hasInfo:true

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
  changeColor() {
    let circleData = this.data.circleData;
    let friedIImpress = this.data.friedIImpress

    let index = null
    let index1 = null
    for (index in circleData) {
      circleData[index].color = colors[index]
   
    }
    for (index1 in friedIImpress) {
      friedIImpress[index1].color = colors[index1]
    }
    
    this.setData({
      circleData: circleData,
      friedIImpress: friedIImpress
    })
   
  },

  onLoad() {

    this.OneComponent = this.selectComponent('#mychart-dom-pie');
    this.getOneOPtion();
    this.changeColor();


    var that = this;
    wx.request({
      //注意：下面的access_token值可以不可以直接复制使用，需要自己请求获取
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=32_04ViIDLQDmTQbMoKpcmEt-DDPnyK7JHHwp027nf4bj-TLDY9eD8D_CRu9n6isLou9Veh6qOeQdiy_6Ppog8s2tOkBe91yg4RveOQN_dBrKQJoIgMOcO-BmFwMOUnVnmUMSFA3JudLJ0SaIhiYBHfAJAPSY',
      data: {
        scene: '000',
        page: ""  //这里按照需求设置值和参数   
      },
      method: "POST",
      responseType: 'arraybuffer',  //设置响应类型
      success(res) {
        console.log(res)
        var src2 = wx.arrayBufferToBase64(res.data);  //对数据进行转换操作
        that.setData({
          src2: src2
        })
      },
      fail(e) {
        console.log(e)
      }
    })


  }

})