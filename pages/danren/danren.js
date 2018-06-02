//danren.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rongqi: [],
    gaiZi:[],
    index:0,
    disabled:true,
    zhuangTai:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        index:options.slectNumber
    })
  },

  switch: function (e) {
    //随机打乱顺序并生成新的数组rongqi，但需要setdata才能动态改变数据
    const length = this.data.rongqi.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.rongqi[x]
      this.data.rongqi[x] = this.data.rongqi[y]
      this.data.rongqi[y] = temp
    }

    wx.setStorage({
      key: 'rongqi',
      data: this.data.rongqi,
    })

    //每次点击打乱都会重新覆盖
    let j=[]
    for (let i = 0; i < this.data.index; i++) {
      j.push({ id: "遮住", unique: "unique_" + i })
    }
    this.setData({
      rongqi:this.data.rongqi,
      gaiZi:j,
      zhuangTai:true
    })
  },

  fill:function(e){
    //判断点击盒子后是跳转填写内容还是揭示盖子
    if(this.data.zhuangTai==false){
  wx.navigateTo({
    url: '../neirong/neirong?preIndex=' + e.currentTarget.dataset.index,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
})
    }
    else{
      let i = e.currentTarget.dataset.index
      this.data.gaiZi[i].id=this.data.rongqi[i].id
      this.setData({
        gaiZi:this.data.gaiZi
      })
    }
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
    let biJiao = []
    //根据上个页面传过来的数据自动生成数组
    if (this.data.rongqi.toString() == biJiao.toString()) {
      for (let i = 0; i < this.data.index; i++) {
        this.data.rongqi.push({ id: "+", unique: 'unique_' + i })
        this.data.gaiZi.push({id:"遮住",unique:"unique_"+i})
      }
      this.setData({
        rongqi: this.data.rongqi,
        gaiZi:this.data.gaiZi
      })
    }
    wx.setStorage({
      key: 'rongqi',
      data: this.data.rongqi,
    })

    //判断页面内所有盒子是否都有内容并改变按钮和显示状态
    let i=0
    while(i<this.data.rongqi.length)
    {
      if(this.data.rongqi[i].id=="+"){
        this.data.disabled=true
        break
      }
      else{
        this.data.disabled=false
      }
      i++
    }
    this.setData({
      disabled: this.data.disabled
    })

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