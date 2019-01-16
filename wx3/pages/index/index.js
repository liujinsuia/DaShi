//index.js
//获取应用实例
const app = getApp()

Page({
  handlejump:function(e){
  var id = e.target.dataset.id;
  if(id==1){
    wx.navigateTo({
      url: '/pages/shoplist/shoplist',
    })
  }
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
      {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
      {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
      {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"},
    ],
    navlist:[
      {id:1,img_url:"http://127.0.0.1:3000/assets/icons/grid-01.png",title:"美食1"},
      {id:2,img_url:"http://127.0.0.1:3000/assets/icons/grid-03.png",title:"美食2"},
      {id:3,img_url:"http://127.0.0.1:3000/assets/icons/grid-04.png",title:"美食3"},
      {id:4,img_url:"http://127.0.0.1:3000/assets/icons/grid-05.png",title:"美食4"},
      {id:5,img_url:"http://127.0.0.1:3000/assets/icons/grid-06.png",title:"美食5"},
      {id:6,img_url:"http://127.0.0.1:3000/assets/icons/grid-07.png",title:"美食6"},
      {id:7,img_url:"http://127.0.0.1:3000/assets/icons/grid-08.png",title:"美食7"},
      {id:8,img_url:"http://127.0.0.1:3000/assets/icons/grid-09.png",title:"美食8"},
      {id:9,img_url:"http://127.0.0.1:3000/assets/icons/grid-02.png",title:"美食9"},
    ]
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