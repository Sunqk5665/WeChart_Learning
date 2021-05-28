// pages/shuju/shuju.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reliang:""
  },
  man:function(id,name,shengao,tizhong,year,reliang){
    this.id = id;
    this.name = name;
    this.shengao = shengao;
    this.tizhong = tizhong;
    this.year = year;
    this.reliang = reliang;
  },
  csc:function(e){
    var name = e.detail.value.name;
    var shengao = parseFloat(e.detail.value.shengao) ;
    var tizhong = parseFloat(e.detail.value.tizhong) ;
    var year = parseFloat(e.detail.value.year);
    var reliang = 0;
    if(name == "男"||name == "nan"||name == "man"){
      reliang = parseInt(66+(13.7*tizhong)+(5*shengao)-(6.8*year));
    }else if(name == "女"||name == "nv"||name == "woman"){
      reliang = parseInt(655+(9.6*tizhong)+(1.7*shengao)-(4.7*year));
    }else{
      wx.showToast({
        title: '请输入正常的性别',
        icon:'none',
        duration:2000
      })
    }
    var man = new Array();
    var man1 = new this.man('1',name,shengao,tizhong,year,reliang);
    man.push(man1);
    wx.setStorageSync('热量',man );
    try{
      var value = wx.getStorageSync('热量');
      console.log(value);
    }catch(e){
      console.log(e);
    }
    this.setData({
      reliang:reliang
    })
  }
  
})