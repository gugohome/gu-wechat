//slect.js
//获取应用实例
const app1 = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuzi:0,
    showDirect:true,
    selectList:["二选一","三选一","四选一","多选一"],
    detail: { imgurl: "", text: "欢迎使用《帮助决策》微信小程序来帮助您决策。\n以下为小程序单人决策的使用方法。\n\n1.根据您迷茫选项的数量点击“+”号创建相同数量和盒子；\n2.点击盒子即可向内填充内容（可填充内容有颜色、文字）；\n3.或您可长按盒子两秒后右划即可填充图片；\n4.所有盒子填充完内容后，您摇一摇手机。系统自动会帮您决策出一个随机的选项；\n5.点击左上角返回键即可返回，您可以更换决定内容再次决策或退出！" },
  },

  changeSlect:function(e){
    this.setData({
      shuzi: e.currentTarget.dataset.index+2,
    })
    wx.navigateTo({
      url: '../danren/danren?slectNumber='+this.data.shuzi
    })
    },

    changeState:function () {
    this.setData({
      showDirect: false,
    })
  },
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