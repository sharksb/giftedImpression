import * as echarts from '../../ec-canvas/echarts';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    xdata: {
      type: Array,
      value: []
    },
    ydataFactor: {
      type: Array,
      value: []
    },
    span:{
      type: String,
      value: ''
    },
    subspan:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ecbar: {
      lazyLoad: true
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    getOneOption() {

      this.init_one(this.data.xdata, this.data.ydataFactor, this.data.span, this.data.subspan)
    },

    init_one(xdata, ydataFactor, span, subspan) { //初始化第一个图表
      this.oneComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr
        });
        barChart(chart, xdata, ydataFactor, span, subspan) //赋值给echart图表
        this.chart = chart;
        return chart;
      });
    },

    
  },

  ready: function () {
    this.oneComponent = this.selectComponent('#mychart-dom-bar');
    this.getOneOption();
  }

})

// 颜色
var colors = ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"]

// 柱状图
function barChart(chart, xdata, ydataFactor, span, subspan) {
  var dataOPtion = [];
  
  var option = {
    title:{
      text: span,
      left:'center',
      subtext: subspan
      
    },
    
    label: {
      show: true,
      position: 'outside',
    },

    xAxis: {
      type: 'value',
      show :false,
      axisLabel: {
        interval: 0,
        rotate: -90
      },
      axisTick: {
        show: false
      },
    },
    yAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: ydataFactor
    },

    series: [{
      type: 'bar',
      itemStyle:{
        barBorderRadius:10
      },
      label:{
        position:'right',
        distance : 20,
      },
      barWidth:10,
      data: xdata,
    
    }]
  }
  chart.setOption(option);
}