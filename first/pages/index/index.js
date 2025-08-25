Page({

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(wx.getUserProfile){
      this.setData({
        canIUseGetUserProfile:true
      })
    }
  },

  
  
  /**
   * 页面的初始数据
   */
  data: {
    src: '/resource/wx.jpg',
    name: 'Hello World',
    
  },
  getMyInfo:function(e) {
    wx.getUserProfile({
      desc: '用于获取微信信息',
      success: (res) => {
        console.log(res.userInfo)
        this.setData({
          src: res.userInfo.avatarUrl,
          name:res.userInfo.nickName
        })
      },
      fail: (res) => {
        console.log('用户拒绝了授权')
      }
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