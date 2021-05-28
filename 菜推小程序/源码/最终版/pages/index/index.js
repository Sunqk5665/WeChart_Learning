var f = 0;
var a;
var lie = ["早饭：小米粥200g 包子100g\n午饭：馅饼100g 草鱼300g 鹌鹑蛋100g\n晚饭： 炒饭100g 苹果100g","早饭：煎蛋100g 鸡胸肉200g\n午饭：花卷100g 羊肉200g 西柚200g\n晚饭：豆芽100g 油饼80g",
"早饭：黄油包100g 牛奶100g\n午饭：鸡肉卷100g 紫薯100g 橙子100g\n晚饭：白米粥100g 麻辣烫200g","早饭：油条200g 豆浆200g\n午饭：米饭200g 鱿鱼100g 大白菜200g\n晚饭：玉米100g 茄子100g 葡萄200g",
"早饭：蛋包饭200g \n午饭：花甲粉100g、苹果100*2g、海苔100g\n晚饭：白菜100*3g、豆角100*5g、鹌鹑蛋100g","早饭：煎蛋100g、白米粥100g*2\n午饭：牛肉100g*2、咖喱饭100g、香蕉100g\n晚饭：米粉100g、脱脂酸奶100g",
"早饭：牛奶100g*2、花卷100g\n午饭：包子100g、菠菜100g*5、海苔100g\n晚饭：紫薯100g、玉米100g*2、西柚100g*3","早饭：黄油包100g 牛奶100g\n午饭：鸡肉卷100g 紫薯100g 橙子100g\n晚饭：白米粥100g 麻辣烫200g"]
Page({
   data: {
      size:{ //转盘大小可配置
         w:599,
         h:600
      },//转盘大小,
      musicflg: true, //声音
      fastJuedin: false,//快速决定
      repeat: false,//不重复抽取
      probability: false,// 概率
      s_awards: '?',//结果
      option: '标题',
      id:'?',
      liebiao:'',
      //转盘的总数据，想添加多个可以往这数组里添加一条格式一样的数据
      xiaojuedingArr: [
         {
            id: 0,
            option: '',//转盘的标题名称
            awards: [
               {
                  id: 0,                // id递增
                  name: "配餐1",           // 选项名 超过9个字时字体会变小点 大于13个数时会隐藏掉超出的
                  color: '#FFA827',    // 选项的背景颜色
                  probability: 10       // 概率 0代表永远也转不到这个选项，数字越大概率也就越大,data中的probability属性设置为true时是才生效, 这属性也必须填写，不填写会出错
               },
               {
                  id: 1,
                  name: "配餐2",
                  color: '#AA47BC',
                  probability: 10
               },
               {
                  id: 2,
                  name: "配餐3",
                  color: '#42A5F6',
                  probability: 10
               },
               {
                  id: 3,
                  name: "配餐4",
                  color: '#66BB6A',
                  probability: 10
               },
               {
                  id: 4,
                  name: "配餐5",
                  color: '#FFA500',
                  probability: 10
               },
               {
                  id: 5,
                  name: "配餐6",
                  color: '#FF4500',
                  probability: 10
               },
               {
                  id: 6,
                  name: "配餐7",
                  color: '#CC99FF',
                  probability: 10
               },
               {
                  id: 7,
                  name: "配餐8",
                  color: '#FF9900',
                  probability: 10
               }
            ]
         }
      ],
      //更改数据可以更改这属性，格式要像下面这样写才行
      awardsConfig: {
         option: '',//转盘的标题名称
         awards: [
            {
               id: 0,                // id递增
               name: "配餐1",           // 选项名 超过9个字时字体会变小点 大于13个数时会隐藏掉超出的
               color: '#FFA827',    // 选项的背景颜色
               probability: 10       // 概率 0代表永远也转不到这个选项，数字越大概率也就越大,data中的probability属性设置为true时是才生效, 这属性也必须填写，不填写会出错
            },
            {
               id: 1,
               name: "配餐2",
               color: '#AA47BC',
               probability: 10
            },
            {
               id: 2,
               name: "配餐3",
               color: '#42A5F6',
               probability: 10
            },
            {
               id: 3,
               name: "配餐4",
               color: '#66BB6A',
               probability: 10
            },
            {
               id: 4,
               name: "配餐5",
               color: '#FFA500',
               probability: 10
            },
            {
               id: 5,
               name: "配餐6",
               color: '#FF4500',
               probability: 10
            },
            {
               id: 6,
               name: "配餐7",
               color: '#CC99FF',
               probability: 10
            },
            {
               id: 7,
               name: "配餐8",
               color: '#FF9900',
               probability: 10
            }
         ]
      },
      
   },
   //接收当前转盘初始化时传来的参数
   getData(e) {
      this.setData({
         option: e.detail.option
      })
   },
 
   //接收当前转盘结束后的答案选项
   getAwards(e) {
      this.setData({
         liebiao:lie[e.detail.id],
         s_awards: e.detail.end ? "?" : e.detail.s_awards,
         // id:e.detail.id,
         
      })
   },
 
   //开始转动或者结束转动
   startZhuan(e) {
      
      // if(f == 0){
      //    a = Math.floor(Math.random()*7)
      //    console.log(a)
      //    f = 1
      // }else{
      //    f = 0
      // }
      this.setData({
         zhuanflg: e.detail ? true : false
      })
   },
 
   //切换转盘选项
   switchZhuanpan(e) {
      //当转盘停止时才执行切换转盘
      if (!this.data.zhuanflg) {
         var idx = e.currentTarget.dataset.idx, zhuanpanArr = this.data.zhuanpanArr, obj = {};
         for (let i in zhuanpanArr) {
            if (this.data.option != zhuanpanArr[i].option && zhuanpanArr[i].id == idx) {
               obj.option = zhuanpanArr[i].option;
               obj.awards = zhuanpanArr[i].awards;
               this.setData({
                  awardsConfig: obj //其实默认要更改当前转盘的数据要传个这个对象，才有效果
               })
               break;
            }
         }
      }
   },
 
 
   onLoad: function () {
       //实例化组件对象，这样有需要时就能调用组件内的方法
       this.zhuanpan = this.selectComponent("#zhuanpan");
 
       //可以这样调用 示例：this.zhuanpan.switchZhuanpan(data); 
       //上面这方法可用来切换转盘选项数据，参数可以看组件构造器中的switchZhuanpan方法
   }
 })