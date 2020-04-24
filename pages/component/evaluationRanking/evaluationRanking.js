// pages/evaluationRanking/evaluationRanking.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    frienddata: {
      type: Array,
      value: []
    },
    frienddataFactor: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ecbar: {
      onInit: function (canvas, width, height, dpr) {
        const barCharts = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(barCharts);
        barCharts.setOption(barChart(this.data.frienddata, this.data.frienddataFactor));
        return barCharts;
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    barChart(frienddata, frienddataFactor) {
      var dataOPtion = [];
      for (let i = 0; i < frienddata.length; i++) {
        if (i < 3) {
          dataOPtion.push({
            value: frienddata[i],
            itemStyle: {
              color: colors[0]
            }
          }
          )
        } else if (i >= 3 && i < 6) {
          dataOPtion.push({
            value: frienddata[i],
            itemStyle: {
              color: colors[1]
            }
          }
          )
        } else if (i >= 6 && i < 9) {
          dataOPtion.push({
            value: frienddata[i],
            itemStyle: {
              color: colors[2]
            }
          }
          )
        } else if (i >= 9 && i < 12) {
          dataOPtion.push({
            value: frienddata[i],
            itemStyle: {
              color: colors[3]
            }
          }
          )
        } else if (i >= 12 && i < 15) {
          dataOPtion.push({
            value: frienddata[i],
            itemStyle: {
              color: colors[4]
            }
          }
          )
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
        label: {
          show: true,
          position: 'outside',
        },
        xAxis: {
          data: frienddataFactor,
          axisLabel: {
            interval: 0,
            rotate: -90
          },
          axisTick: {
            show: false
          },

        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: frienddata
          }
        ]
      }
    }
  }
})
