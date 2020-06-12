const app = getApp();
let data = [{
  "children": [{
    "id": 7,
    "name": "超有责任心",
    "parentId": 1
  }, {
    "id": 8,
    "name": "乐于助人",
    "parentId": 1
  }, {
    "id": 9,
    "name": "积极分子",
    "parentId": 1
  }, {
    "id": 10,
    "name": "表达力好",
    "parentId": 1
  }, {
    "id": 11,
    "name": "思维活跃",
    "parentId": 1
  }, {
    "id": 12,
    "name": "勤劳务实",
    "parentId": 1
  }, {
    "id": 13,
    "name": "为人正直",
    "parentId": 1
  }, {
    "id": 14,
    "name": "做事有魄力",
    "parentId": 1
  }, {
    "id": 15,
    "name": "有冒险精神",
    "parentId": 1
  }, {
    "id": 16,
    "name": "自信十足",
    "parentId": 1
  }, {
    "id": 17,
    "name": "坚韧不拔",
    "parentId": 1
  }, {
    "id": 18,
    "name": "号召力强",
    "parentId": 1
  }],
  "id": 1,
  "name": "人格魅力"
}, {
  "children": [{
    "id": 19,
    "name": "阳光向上",
    "parentId": 2
  }, {
    "id": 20,
    "name": "遇事镇定",
    "parentId": 2
  }, {
    "id": 21,
    "name": "一身正气",
    "parentId": 2
  }, {
    "id": 22,
    "name": "精力充沛",
    "parentId": 2
  }],
  "id": 2,
  "name": "身心素质"
}, {
  "children": [{
    "id": 23,
    "name": "学霸",
    "parentId": 3
  }, {
    "id": 24,
    "name": "竞争意识强",
    "parentId": 3
  }, {
    "id": 25,
    "name": "不服输",
    "parentId": 3
  }, {
    "id": 26,
    "name": "公益达人",
    "parentId": 3
  }, {
    "id": 27,
    "name": "勤奋",
    "parentId": 3
  }, {
    "id": 28,
    "name": "执着",
    "parentId": 3
  }],
  "id": 3,
  "name": "成就动机"
}, {
  "children": [{
    "id": 29,
    "name": "适应能力强",
    "parentId": 4
  }, {
    "id": 30,
    "name": "问题终结者",
    "parentId": 4
  }, {
    "id": 31,
    "name": "新思潮引领者",
    "parentId": 4
  }, {
    "id": 32,
    "name": "创新达人",
    "parentId": 4
  }, {
    "id": 33,
    "name": "应变超快",
    "parentId": 4
  }],
  "id": 4,
  "name": "适应能力"
}, {
  "children": [{
    "id": 34,
    "name": "有修养",
    "parentId": 5
  }, {
    "id": 35,
    "name": "度量大",
    "parentId": 5
  }, {
    "id": 36,
    "name": "自我调节",
    "parentId": 5
  }, {
    "id": 37,
    "name": "打不死的小强",
    "parentId": 5
  }, {
    "id": 38,
    "name": "目标感强",
    "parentId": 5
  }, {
    "id": 39,
    "name": "善于发挥优势",
    "parentId": 5
  }, {
    "id": 40,
    "name": "自律",
    "parentId": 5
  }],
  "id": 5,
  "name": "情绪控制"
}, {
  "children": [{
    "id": 41,
    "name": "自制力强",
    "parentId": 6
  }, {
    "id": 42,
    "name": "沟通流畅",
    "parentId": 6
  }, {
    "id": 43,
    "name": "让人信服",
    "parentId": 6
  }, {
    "id": 44,
    "name": "最佳队友",
    "parentId": 6
  }, {
    "id": 45,
    "name": "最佳组织者",
    "parentId": 6
  }, {
    "id": 46,
    "name": "行动派",
    "parentId": 6
  }],
  "id": 6,
  "name": "管理能力"
}]
Page({

  data: {
    friendId: null,
    userInfo: null,
    items: null,
    isBoxDisable: false,
    count: 0,
    length:null
  },
  checkboxChange(e) {
    var that = this;
    var items = this.data.items;
    var count = this.data.count;
    var checkArr = e.detail.value;
    var checkArr1 = e.detail.value;
    count = e.detail.value.length
    if (this.data.length != null){
      checkArr = checkArr1.slice(this.data.length)
      count = count - this.data.length
      }
      // var checkArr = e.detail.value;
      this.setData({
        count: count
      })

      //判断是否到达五个,除了选中的5个,其他设为disable,未做
      if (this.data.count > 5) {
        wx.showToast({
          title: '最多只能选择5个',
          icon: 'none',
          duration: 3000
        })
      } else {
        //改变选中/取消选中

        for (let i = 0; i < items.length; i++) {
          for (let k = 0; k < items[i].children.length; k++) {
            items[i].children[k].checked = false
            for (let j = 0; j < checkArr.length; j++) {
              if (checkArr[j] == items[i].children[k].id) {
                items[i].children[k].checked = true;
                break;
              } else {
                items[i].children[k].checked = false;
              }
            }
          }
        }
      }


      // console.log(items)
      this.setData({
        items: items
      })
    

  },
  toHelp: function() {
    var that = this;
    //获取选中的标签id
    var checkboxItems = that.data.items;
    var selected = ''; //当前选择到的值
    for (var i = 0; i < checkboxItems.length; i++) {
      for (var j = 0; j < checkboxItems[i].children.length; j++) {
        if (checkboxItems[i].children[j].checked == true) {
          selected += checkboxItems[i].children[j].id + ","
        }
      }
    }
    selected = selected.substring(0, selected.length - 1);
    console.log("选中的:" + selected)
    // wx.request({
    //   url: app.globalData.url + '/evaluation/saveData',
    //   data: {
    //     friendId: that.data.friendId,
    //     userOpenId: app.globalData.openId,
    //     abilities: selected,
    //     userAvatarUrl: that.data.userInfo.avatarUrl,
    //     userNickName: that.data.userInfo.nickName
    //   },
    //   success: function (res) {
    //     var data = res.data;
    //     //弹出助力成功,并跳转页面
    //     wx.showToast({
    //       title: '助力成功',
    //       icon: 'success',
    //       duration: 2000
    //     })
    //     //返回上一级关闭当前页面
    //     wx.navigateBack({
    //       delta: 1
    //     })
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // var friendId = options.friendId;
    var friendId = 'fed4a00cd58d49689e5e325486d2b597';
    that.setData({
      items: data,
      friendId: friendId
    })
    console.log(data)
    // wx.request({
    //   url: app.globalData.url + '/ability/getAbilities',
    //   data: {},
    //   success: function (res) {
    //     var data = res.data;
    //     console.log(data)
    //     that.setData({
    //       items: data,
    //       friendId: friendId
    //     })
    //     console.log(that.data.friendOpenId)
    //   }
    // })
  },
  /**
   * 
   * 获取用户信息并确定
   */
  onGotUserInfo: function(e) {
    var that = this;
    if (e.detail.errMsg == 'getUserInfo:ok') {
      that.setData({
        userInfo: e.detail.userInfo
      })
      //判断是否选择了一项

      //提交
      that.toHelp();
    }
    console.log(e.detail.errMsg)
  },

  clearAll() {
    let length = this.data.count
    let checkboxItems = this.data.items;
    for (let i = 0; i < checkboxItems.length; i++) {
      for (var j = 0; j < checkboxItems[i].children.length; j++) {
        if (checkboxItems[i].children[j].checked == true) {
          checkboxItems[i].children[j].checked = false;
        }
      }
    }
    this.setData({
      items: checkboxItems,
      count: 0,
      length:length
    })
    console.log(length)
    // let e = undefined
    // this.checkboxChange(e, 'clear', length)
    // wx.redirectTo({
    //   url: "/pages/guanjianci/guanjianci"
    // })

    // if (getCurrentPages().length != 0) {
    //   //刷新当前页面的数据
    //   getCurrentPages()[getCurrentPages().length - 1].onLoad()
    // }
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