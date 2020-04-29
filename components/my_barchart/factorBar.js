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
    },
    barcolor: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    ecbar: {
      lazyLoad: true
    },
    canvasSaveimg:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    getOneOption() {

      // this.init_one(this.data.xdata, this.data.ydataFactor, this.data.span, this.data.subspan, this.data.barcolor)
    },

    init_one(xdata, ydataFactor, span, subspan, barcolor) { //初始化第一个图表

      this.oneComponent.init((canvas, width, height) => {
        let chart = echarts.init(canvas, null, {
          width: width,
          height: height,
        });
        this.barChart(chart, xdata, ydataFactor, span, subspan, barcolor) 
      
       this.chart = chart;
        return chart;
      });
      this.save()    
    },
    barChart(chart, xdata, ydataFactor, span, subspan, barcolor) {
      var dataOPtion = [];

      var option = {
        title: {
          text: '-     ' + span + '     -',
          left: 'center',
          subtext: subspan

        },
        color: barcolor,
        label: {
          show: true,
          position: 'outside',
        },

        xAxis: {
          type: 'value',
          show: false,
         
          // axisLabel: {
          //   interval: 0,
          //   rotate: -90
          // },
          axisTick: {
            show: false
          },
          
        },
        grid: { // 控制图的大小，调整下面这些值就可以，
          x: 85,//x的值可以空值y轴与label标签的距离，效果如下图：
          x2: 40,
          y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
        yAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          
          axisLine: {
            show: false
          },
          nameTextStyle: {
            rich: {
              a: {
              
              }
            },
            backgroundColor:'red'
          },
          data: ydataFactor
        },

        series: [{
          type: 'bar',
          itemStyle: {
            barBorderRadius: 10
          },
          
          label: {
            position: 'right',
            formatter:'{c}人'
          },
          barWidth: 10,
          data: xdata,

        }]
      }
      chart.setOption(option);
    },
    save() {
      const ecComponent = this.selectComponent('#mychart-dom-bar');

      // 先保存图片到临时的本地文件，然后存入系统相册
      ecComponent.canvasToTempFilePath({
        fileType: 'jpg',
        success: res => {
          console.log("tempFilePath:", res.tempFilePath)
          this.setData({
            canvasSaveimg: res.tempFilePath
          })
          console.log(this.data.canvasSaveimg)
          // 存入系统相册
          // wx.saveImageToPhotosAlbum({
          //   filePath: res.tempFilePath || '',
          //   success: res => {
          //     console.log("success", res)
          //   },
          //   fail: res => {
          //     console.log("fail", res)
          //   }
          // })
        },
        fail: res => console.log(res)
      });
    }
    
  },
   

  ready () {
    this.oneComponent = this.selectComponent('#mychart-dom-bar'); 
      // this.getOneOption();
    this.init_one(this.data.xdata, this.data.ydataFactor, this.data.span, this.data.subspan, this.data.barcolor);
    
  }
 

})



