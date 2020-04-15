// pages/test/test.js
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

// 颜色
var colors = ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"]

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
// var dataoptions=dataOPtion.split('"')
// var dataoptions = []

// console.log(dataOPtion)
// dataOPtion = encodeURIComponent(dataOPtion) ;
// dataOPtion = JSON.stringify(dataOPtion) 
// console.log(dataOPtion);
// dataOPtion = JSON.parse(dataOPtion)
// console.log(dataOPtion);
// dataOPtion = decodeURIComponent(dataOPtion)
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
        barCharts.setOption(barChart());
        return barCharts;
      }
    },

  },


})

// 饼图
function pieChart() {
  return {

    // 标题
    title: {
      text: '能力模型',
      left: '40%',
      textStyle: {
        // color: '#ffffff',
        fontSize: 14
      }
    },

    // 背景颜色
    backgroundColor: "#ffffff",
    color: colors,
    
    legend: {
      orient: 'vertical',
      // align:'left',
      right: '5%',
      top: '20%',
      data: ['上海', '北京', '武汉', '杭州', '广州'],
      icon: 'circle'
    },
    series: [{
      label: {
        position: 'inside',
        formatter: '{d}%',

      },
      labelLine: {
        show: false
      },
      type: 'pie',
     
      data: [{
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
    }]
  }
};

// 柱状图
function barChart() {
  return {
    title: {
      text: '评价排行',
      left: '40%',
      textStyle: {
        // color: '#ffffff',
        fontSize: 14
      }
    },
    // backgroundColor: "#ffffff",
    // color: '#37A2DA',
    legend: {
      data: ['销量']
    },
    label: {
      show: true,
      position: 'outside',
    },
    // dataset: {
    //   source: [
    //     ['item1', 'value'],
    //     ['item11', 40],
    //     ['item12', 30],
    //     ['item21', 20]
    //     ['item21', 35]
    //   ]
    // },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "衬衫", "羊毛衫", "雪纺衫"],
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
    // yAxis: {
    //   nameTextStyle: {
    //     width: 50,
    //     backgroundColor: "#37A2DA"
    //   }
    // },
    series: [
      {
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: "#666666"
        },
        // itemStyle:{
        //   color: ["#37A2DA", "#37A2DA", "#37A2DA", "#32C5E9", "#32C5E9", "#32C5E9", "#67E0E3", "#67E0E3", "#67E0E3", "#91F2DE", "#91F2DE", "#91F2DE", "#FFDB5C", "#FFDB5C", "#FFDB5C"]
        // },

        data: dataOPtion
        // [
        // {value:5,
        //  itemStyle:{
        //   color: colors[0]
        //  }},
        // {
        //   value: 20,
        //   itemStyle: {
        //     color: colors[0]
        //   }
        // },
        // {
        //   value: 36,
        //   itemStyle: {
        //     color: colors[0]
        //   }
        // },
        // {
        //   value: 10,
        //   itemStyle: {
        //     color: colors[1]
        //   }
        // },
        // {
        //   value: 10,
        //   itemStyle: {
        //     color: colors[1]
        //   }
        // },
        // {
        //   value: 20,
        //   itemStyle: {
        //     color: colors[1]
        //   }
        // },
        // {
        //   value: 20,
        //   itemStyle: {
        //     color: colors[2]
        //   }
        // },
        // {
        //   value: 5,
        //   itemStyle: {
        //     color: colors[2]
        //   }
        // },
        // {
        //   value: 20,
        //   itemStyle: {
        //     color: colors[2]
        //   }
        // },
        // {
        //   value: 20,
        //   itemStyle: {
        //     color: colors[3]
        //   }
        // },
        // {
        //   value: 36,
        //   itemStyle: {
        //     color: colors[3]
        //   }
        // },
        // {
        //   value: 10,
        //   itemStyle: {
        //     color: colors[3]
        //   }
        // },
        // {
        //   value: 10,
        //   itemStyle: {
        //     color: colors[4]
        //   }
        // },
        // {
        //   value: 20,
        //   itemStyle: {
        //     color: colors[4]
        //   }
        // },
        // {
        //   value: 5,
        //   itemStyle: {
        //     color: colors[4]
        //   }
        // },


        // ]
        // color:[]
      }
      // { type: 'bar'},
      // { type: 'bar'},
      // { type: 'bar'},
      // { type: 'bar'},
      // { type: 'bar', seriesLayoutBy: 'row' },
      // { type: 'bar', seriesLayoutBy: 'row' },

    ]
  }
}


// 柱状图x轴数据

