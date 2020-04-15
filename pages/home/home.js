// pages/test/test.js
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

// 颜色
var colors = ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C"]

var datas = [5, 20, 36, 10, 10, 20, 20, 5, 20, 20, 36, 10, 10, 20, 5]
// var barColor = '';
var dataOPtion = [];
for (let i = 0; i < datas.length; i++) {
  if (i < 3) {
    dataOPtion.push({
      value: datas[i],
      itemStyle: {
        color: colors[0]
      }
    }
    )
  } else if (i >= 3 && i < 6) {
    dataOPtion.push({
      value: datas[i],
      itemStyle: {
        color: colors[1]
      }
    }
    )
  } else if (i >= 6 && i < 9) {
    dataOPtion.push({
      value: datas[i],
      itemStyle: {
        color: colors[2]
      }
    }
    )
  } else if (i >= 9 && i < 12) {
    dataOPtion.push({
      value: datas[i],
      itemStyle: {
        color: colors[3]
      }
    }
    )
  } else if (i >= 12 && i < 15) {
    dataOPtion.push({
      value: datas[i],
      itemStyle: {
        color: colors[4]
      }
    }
    )
  }
}

console.log(dataOPtion);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  柱状图
    ec: {
      onInit: function (canvas, width, height, dpr) {
        const barCharts = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(barCharts);
        barCharts.setOption(option);
        return barCharts;
      }
    },

  },


})


// 柱状图
var option={
  title: {
    text: '评价排行',
    left: '40%',
    textStyle: {
      // color: '#ffffff',
      fontSize: 14
    }
  },
  // backgroundColor: "#ffffff",
  color: colors,
  legend: {
    data: ['销量']
  },
  label: {
    show: true,
    position: 'outside',
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"],
    axisLabel: {
      interval: 0,
      rotate: -90
    },
    axisTick: {
      show: false
    },
    // type: 'category',
  },
  yAxis: {},

  series: [
    {
      type: 'bar',

      barWidth: 8,

      // backgroundStyle: {
      //   color: 'rgba(220, 220, 220, 0.8)'
      // },
      data: [10, 15, 25, 5, 30],
      // 图形样式
      itemStyle: {
        barBorderRadius: 20,
      },
      showBackground: true,
    }

  ]
}




// 柱状图x轴数据

