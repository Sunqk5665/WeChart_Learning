//index.js
//获取应用实例
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabIndex: 0,
    // 统计商品数量和价格
    orderCount: {
      num: 0,
      money: 0
    },
    bottomFlag: false,
    // 提交的订单
    orders: true,
    menus: [{
      id: 1,
      menu: '主食类'
    }, {
      id: 1,
      menu: '鱼肉类'
    }, {
      id: 1,
      menu: '水果类'
    }, {
      id: 1,
      menu: '蔬菜类'
    }, {
      id: 1,
      menu: '零食类'
    }, {
      id: 1,
      menu: '外卖类'
    }, {
      id: 1,
      menu: '乳制品'
    }],
    // 商品列表
    items: [{ //***************主食区****************
        id: 0,
        title: '米饭',
        price: 12,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQ8wn.png",
      }, {
        id: 0,
        title: '八宝粥',
        price: 13,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQ3es.png",
      }, {
        id: 0,
        title: '白米粥',
        price: 14,
        active: false,
        num: 0,
        src: "https://s3.ax1x.com/2020/12/29/rHQPQe.png",
      }, {
        id: 0,
        title: '小米粥',
        price: 15,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQQyQ.png",
      }, {
        id: 0,
        title: '饭团',
        price: 16,
        active: false,
        num: 0,
        src: "https://s3.ax1x.com/2020/12/29/rHQYF0.png",
      }, {
        id: 0,
        title: '馒头',
        price: 17,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQGoq.png",
      }, {
        id: 0,
        title: '包子',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQtYV.png",
      }, {
        id: 0,
        title: '花卷',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQNWT.png",
      }, {
        id: 0,
        title: '馅饼',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQaSU.png",
      }, {
        id: 0,
        title: '豆浆',
        price: 18,
        active: false,
        num: 0,
        src: "https://s3.ax1x.com/2020/12/29/rHQwy4.png",
      }, {
        id: 0,
        title: '油条',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQdlF.png",
      }, {
        id: 0,
        title: '黄油包',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQDm9.png",
      }, {
        id: 0,
        title: '油饼',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQrwR.png",
      }, {
        id: 0,
        title: '汤圆',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQsT1.png",
      }, {
        id: 0,
        title: '面条',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQ6Fx.png",
      }, {
        id: 0,
        title: '米粉',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQgfK.png",
      }, {
        id: 0,
        title: '炒饭',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rHQWlD.png",
      },{ //*********************鱼肉区*******************
        id: 1,
        title: '鲤鱼',
        price: 12,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbeq2Q.png",
      }, {
        id: 1,
        title: '沙丁鱼',
        price: 13,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbehDI.png",
      }, {
        id: 1,
        title: '鲫鱼',
        price: 14,
        active: false,
        num: 0,
        src: "https://s3.ax1x.com/2020/12/29/rbeoUf.png",
      }, {
        id: 1,
        title: '草鱼',
        price: 15,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbeb8g.png",
      }, {
        id: 1,
        title: '黑鱼',
        price: 16,
        active: false,
        num: 0,
        src: "https://s3.ax1x.com/2020/12/29/rbe4bt.png",
      }, {
        id: 1,
        title: '鱿鱼',
        price: 17,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmPGF.png",
      }, {
        id: 1,
        title: '章鱼',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmp5T.png",
      }, {
        id: 1,
        title: '培根',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmi24.png",
      }, {
        id: 1,
        title: '火腿',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmFxJ.png",
      }, {
        id: 1,
        title: '烤鸭',
        price: 18,
        active: false,
        num: 0,
        src: "https://s3.ax1x.com/2020/12/29/rbmma6.png",
      }, {
        id: 1,
        title: '羊肉',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmeVx.png",
      }, {
        id: 1,
        title: '猪肥肉',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmQRe.png",
      }, {
        id: 1,
        title: '猪瘦肉',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmVq1.png",
      }, {
        id: 1,
        title: '牛肉',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmlxH.png",
      }, {
        id: 1,
        title: '鸡胸肉',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbm8sA.png",
      }, {
        id: 1,
        title: '水煮蛋',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmGqI.png",
      }, {
        id: 1,
        title: '茶叶蛋',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbmYZt.png",
      }, { //*****************水果类********************
        id: 2,
        title: '桂圆',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rblPG6.png",
      }, {
        id: 2,
        title: '榴莲',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rblpI1.png",
      }, {
        id: 2,
        title: '牛油果',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rblCPx.png",
      }, {
        id: 2,
        title: '椰子',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbQvqJ.png",
      }, {
        id: 2,
        title: '大枣',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbQzZ9.png",
      }, {
        id: 2,
        title: '西柚',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbliRK.png",
      }, {
        id: 2,
        title: '柠檬',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbWg74.png",
      }, {
        id: 2,
        title: '草莓',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbWWN9.png",
      }, {
        id: 2,
        title: '猕猴桃',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbWfhR.png",
      }, {
        id: 2,
        title: '苹果',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbWRAJ.png",
      },{ //******************蔬菜类*****************/
        id: 3,
        title: '黄瓜',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbf9u8.png",
      }, {
        id: 3,
        title: '青椒',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbWv9I.png",
      }, {
        id: 3,
        title: '番茄',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbWx3t.png",
      }, {
        id: 3,
        title: '胡萝卜',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbWX4A.png",
      }, {
        id: 3,
        title: '西兰花',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbWzgP.png",
      }, {
        id: 3,
        title: '冬瓜',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfkNj.png",
      }, {
        id: 3,
        title: '白萝卜',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfCDS.png",
      }, {
        id: 3,
        title: '南瓜',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfPHg.png",
      }, {
        id: 3,
        title: '香菇',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfFEQ.png",
      }, {
        id: 3,
        title: '金针菇',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfeg0.png",
      }, { //****************零食类****************/
        id: 4,
        title: '饼干',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfsPA.png",
      }, {
        id: 4,
        title: '薯片',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbf0Ve.png",
      }, {
        id: 4,
        title: '爆米花',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfaDO.png",
      }, {
        id: 4,
        title: '巧克力',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbftv6.png",
      }, {
        id: 4,
        title: '奶糖',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfdbD.png",
      }, {
        id: 4,
        title: '蛋糕',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbf62t.png",
      }, {
        id: 4,
        title: '冰淇淋',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfy8I.png",
      }, {
        id: 4,
        title: '辣条',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfcxP.png",
      }, {
        id: 4,
        title: '果脯',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbf2Kf.png",
      }, {
        id: 4,
        title: '奶茶',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfRr8.png",
      }, {//***************外卖类************** */
        id: 5,
        title: '蛋包饭',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbf4aQ.png",
      }, {
        id: 5,
        title: '叉烧饭',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbf55j.png",
      }, {
        id: 5,
        title: '寿司',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfHx0.png",
      }, {
        id: 5,
        title: '咖喱饭',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbf72q.png",
      }, {
        id: 5,
        title: '黄焖鸡',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfoPs.png",
      }, {
        id: 5,
        title: '泡面',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfLrT.png",
      }, {
        id: 5,
        title: '烤肉饭',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rbfOqU.png",
      },{
        id: 5,
        title: '馄饨',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqkG0f.png",
      },{
        id: 5,
        title: '炸酱面',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqk8nP.png",
      },{
        id: 5,
        title: '小笼包',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqk1Xt.png",
      },{//**********************乳制品***************** */
        id: 6,
        title: '脱脂酸奶',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqPO9s.png",
      },{
        id: 6,
        title: '酸奶',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqiQ4H.png",
      },{
        id: 6,
        title: '奶酪',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqiMUe.png",
      },{
        id: 6,
        title: '芝士片',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqPjcq.png",
      },{
        id: 6,
        title: '脱脂牛奶',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqPX3n.png",
      },{
        id: 6,
        title: '羊奶',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqiSBT.png",
      },{
        id: 6,
        title: '牛奶',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqPvj0.png",
      },{
        id: 6,
        title: '奶油',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqipHU.png",
      },{
        id: 6,
        title: '炼乳',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqiCEF.png",
      },{
        id: 6,
        title: '黄油',
        price: 18,
        active: false,
        num: 1,
        src: "https://s3.ax1x.com/2020/12/29/rqiPN4.png",
      },
    ]
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    setTimeout(()=>{
      wx.showToast({
        title: '成功加载数据',
        icon: 'success',
        duration: 500
      });
      wx.stopPullDownRefresh()
    }, 500);
  },
  tabMenu: function(event) {
    let index = event.target.dataset.index;
    this.setData({
      tabIndex: index
    });
  },
  // 点击去购物车结账
  card: function() {
    let that = this;
    // 判断是否有选中商品
    if (that.data.orderCount.num !== 0) {
      // 跳转到购物车订单也
      wx.redirectTo({
        url: '../order/order'
      });
    } else {
      wx.showToast({
        title: '您未选中任何商品',
        icon: 'none',
        duration: 2000
      })
    }
  },
  addOrder: function(event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.items[index];
    let subOrders = []; // 购物单列表存储数据
    param.active ? param.active = false : param.active = true;
    // 改变添加按钮的状态
    this.data.items.splice(index, 1, param);
    that.setData({
      items: this.data.items
    });
    // 将已经确定的菜单添加到购物单列表
    this.data.items.forEach(item => {
      if (item.active) {
        subOrders.push(item);
      }
    });
    // 判断底部提交菜单显示隐藏
    if (subOrders.length == 0) {
      that.setData({
        bottomFlag: false
      });
    } else {
      that.setData({
        bottomFlag: true
      });
    }
    let money = 0;
    let num = subOrders.length;
    subOrders.forEach(item => {
      money += item.price; // 总价格求和
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
    // 将选中的商品存储在本地
    wx.setStorage({
      key: "orders",
      data: subOrders
    });
  },
  onLoad: function() {

  }
})

//******** */