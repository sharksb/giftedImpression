// components/checkbox/checkbox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items:Array,
    titles:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)

      const items = this.data.items
      const values = e.detail.value
      const count = e.detail.value.length;
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
        items,
        count
      })
      console.log(count)
      let titles = this.data.titles
      this.triggerEvent('onCheckbox', { items, values, count, titles})
    }
  }
})
