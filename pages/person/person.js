// pages/person/person.js
var items = [{
  name: 'USA',
  value: '美国',
  num: 2
},
{
  name: 'CHN',
  value: '中国',
  num: 2
},
{
  name: 'BRA',
  value: '巴西',
  num: 30
},
{
  name: 'JPN',
  value: '日本',
  num: 15
},
{
  name: 'ENG',
  value: '英国',
  num: 15
},
{
  name: 'TUR',
  value: '法国',
  num: 15
},]
var itemsNum = [];
for (let i = 0; i < items.length;i++){
  itemsNum.push(items[i].num);
}
console.log(itemsNum)
Page({

  /**
   * 页面的初始数据
   */

  data: {
    items: items,
    itemsNum: itemsNum
  },


  checkboxChange(e) {
    console.log(e)
    var items = this.data.items;
    var checkArr = e.detail.value;
    var itemsNum = this.data.itemsNum

    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < checkArr.length; j++) {
        if (checkArr[j] == items[i].value) {
          items[i].checked = true;
          items[i].num = itemsNum[i]+1;
          break;
        } else {
          items[i].checked = false;
          items[i].num = itemsNum[i];
        }

      }
    }
    console.log(items)
    this.setData({
      items: items
    })
  },

  changeNumber() {
    let items = this.data.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        items[i].num = items[i].num + 1;
      }
    }
  },

  noop() { },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})