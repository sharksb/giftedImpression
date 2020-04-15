App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (event) {
    console.log(event)
    wx.request({
      url: 'https://newsapi.cnthr.com/api/contentList?apiKey=48e2398f-b2e4-4fb5-8e98-0da6f7124c2c&siteId=1&channelId=103&isTop=&PageIndex=1&PageSize=999',
      success(data){
        console.log(JSON.parse(data.data))
         JSON.parse(data.data)
      }
    })
    wx.getUserInfo({
       success(data){
         console.log(data)
       }
    })

    // var errorText = new Error();
    // throw errorText

    wx.setStorageSync('key', 'data')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("我被隐藏了")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg)
  }
})
