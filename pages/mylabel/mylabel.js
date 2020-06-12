// pages/mylabel/mylabel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counts: 0,
    item1: {
      titles: "人格魅力",
      count: 0,
      items: [
        { value: '员工招聘与选拔'},
        { value: '培训与开发' },
        { value: '绩效考评'},
        { value: '薪酬管理'},
        { value: '员工激励'},
        { value: '职业生涯规划'}
      ],
    },

    item2: {
      titles: "身心素质",
      count: 0,
      items: [
        { value: '入职转调' },
        { value: 'EHR系统管理' },
        { value: '员工访谈' },
        { value: '劳动纠纷处理' },
        { value: '工作流程处理' },
        { value: 'OA邮件群组管理' }
      ],
    },

    item3: {
      titles: "成就动机",
      count: 0,
      items: [
        { value: '组织绩效管理' },
        { value: '组织设计' },
        { value: '战略分析' },
        { value: '企业文化建设' },
        { value: '组织效率分析' },
      ],
    },
    item4: {
      titles: "适应能力",
      count: 0,
      items: [
        { value: '组织绩效管理' },
        { value: '组织设计' },
        { value: '战略分析' },
        { value: '企业文化建设' },
        { value: '组织效率分析' },
      ],
    },
    item5: {
      titles: "适应能力",
      count: 0,
      items: [
        { value: '组织绩效管理' },
        { value: '组织设计' },
        { value: '战略分析' },
        { value: '企业文化建设' },
        { value: '组织效率分析' },
      ],
    },
    item6: {
      titles: "适应能力",
      count: 0,
      items: [
        { value: '组织绩效管理' },
        { value: '组织设计' },
        { value: '战略分析' },
        { value: '企业文化建设' },
        { value: '组织效率分析' },
      ],
    },

    arrSelected1:[],
    arrSelected2: [],
    arrSelected3: [],
    arrSelected4: [],
    arrSelected5: [],
    arrSelected6: [],
    sitem1:null,
    sitem2: null,
    sitem3: null,
    sitem4: null,
    sitem5: null,
    sitem6: null,

  },

  checkboxChange1(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const item1 = this.data.item1
    const items = item1.items
    const values = e.detail.value
    item1.count = e.detail.value.length
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      item1,
      arrSelected1: values
    })
    console.log(this.data.arrSelected1)
},
  checkboxChange2(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const item2 = this.data.item2
    const items = item2.items
    const values = e.detail.value
    item2.count = e.detail.value.length
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      item2,
      arrSelected2: values
    })
    console.log(this.data.arrSelected2)
  },
  checkboxChange3(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const item3 = this.data.item3
    const items = item3.items
    const values = e.detail.value
    item3.count = e.detail.value.length
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      item3,
      arrSelected3: values
    })
    console.log(this.data.arrSelected3)
  },
  checkboxChange4(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const item4 = this.data.item4
    const items = item4.items
    const values = e.detail.value
    item4.count = e.detail.value.length
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      item4,
      arrSelected4: values
    })
    console.log(this.data.arrSelected4)
  },
  checkboxChange5(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const item5 = this.data.item5
    const items = item5.items
    const values = e.detail.value
    item5.count = e.detail.value.length
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      item5,
      arrSelected5: values
    })
  },
  checkboxChange6(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const item6 = this.data.item6
    const items = item6.items
    const values = e.detail.value
    item6.count = e.detail.value.length
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      item6,
      arrSelected6: values
    })
  },


  confirm(){
    // 人格魅力
    let arrSelected1 = this.data.arrSelected1;
    // 身心素质
    let arrSelected2 = this.data.arrSelected2;
    // 成就动机
    let arrSelected3 = this.data.arrSelected3;
    // 适应能力
    let arrSelected4 = this.data.arrSelected4;

    // 适应能力
    let arrSelected5 = this.data.arrSelected5;

    // 适应能力
    let arrSelected6 = this.data.arrSelected6;

    // 所有能力
    let allArr = arrSelected1.concat(arrSelected2, arrSelected3, arrSelected4, arrSelected5, arrSelected6)
    console.log(allArr)
  },
  clear(){
    // let sitem1 = this.data.sitem1
    // let sitem2 = this.data.sitem2
    // let sitem3 = this.data.sitem3
    // let sitem4 = this.data.sitem4
    // let sitem5 = this.data.sitem5
    // let sitem6 = this.data.sitem6
    //  this.setData({
    //    item1:this.data.sitem1,
    //    item2: this.data.sitem2,
    //    item3: this.data.sitem3,
    //    item4: this.data.sitem4,
    //    item5: this.data.sitem5,
    //    item6: this.data.sitem6,
    //  })
    // console.log(this.data.sitem1)
    //  console.log(this.data.item1)
    //  this.checkboxChange1()
    // this.checkboxChange2()
    // this.checkboxChange3()
    // this.checkboxChange4()
    // this.checkboxChange5()
    // this.checkboxChange6()
    let item1 = this.data.item1
    let item2 = this.data.item2
    let item3 = this.data.item3
    let item4 = this.data.item4
    let item5 = this.data.item5
    let item6 = this.data.item6
    item1.items.forEach((item)=>{
      
    })
  },
  onLoad(){
    // let item1 = this.data.item1
    // let item2 = this.data.item2
    // let item3 = this.data.item3
    // let item4 = this.data.item4
    // let item5 = this.data.item5
    // let item6 = this.data.item6
    // this.setData({
    //   sitem1: item1,
    //   sitem2: item2,
    //   sitem3: item3,
    //   sitem4: item4,
    //   sitem5: item5,
    //   sitem6: item6,
    // })
    // console.log(this.data.sitem1)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})