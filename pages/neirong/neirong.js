let shuJu=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
        liebiao:["颜色","数字","自定义"],
        yanse:["黄色","蓝色","紫色","白色","绿色"],
        shuzi:[1,2,3,4,5,6,7],
        zidingyi:["待定",],
        currentIndex:0,
        preIndex:0,
  },

  changeTabbar: function (e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    });
  },

  chuanshushuju:function(e){
    shuJu[this.data.preIndex].id= e.currentTarget.dataset.item,
    wx.setStorage({
      key: 'rongqi',
      data: shuJu,
    })
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      rongqi:shuJu
    })
    wx.navigateBack({
    delta: 1,
    });
  
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      preIndex: options.preIndex,
    })
    wx.getStorage({
      key: 'rongqi',
      success: function(res) {
        shuJu=res.data
      },
    })

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