import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: "#37A2DA",
    series: [{
      name: '业务指标',
      type: 'gauge',
      radius :'70%',
      detail: {
        formatter: '{value}%'
      },
      startAngle:'180',
      endAngle: '-0',
      splitLine:{
        show: false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 30,
          shadowBlur: 0,
          width:15,
        }
      },
      pointer:{
         show:false
      },
      data: [{
        value: 40,
        name: '完成率',
      }]

    }]
  };

  chart.setOption(option, true);

  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
