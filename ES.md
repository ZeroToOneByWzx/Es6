## 第一章、ES6基础知识详解

### 1.1、ES、JS之间的关系

​		ES是 ECMAScript 的简写

```
JS 是由 ECMAScript（核心）、DOM（文档对象模型）、BOM（浏览器对象模型组成）
ES就是JS的一部分

开发工具推荐 VS code 插件功能强大

插件推荐安装 View in Browser（在浏览器中查看）、JavaScript (ES6) code snippets（ES6片段代码）
```

### 1.2、为什么用ES?

- js的语法层面是遵循es的

- 你学js其实已经囊括了es,只不过你学的教程可能都是用的es5的语法标准

- 学js必学es,无非用的老版本还是新版本,而es6及6以后相对于之前版本做了很多改进,提供了很多新技术

  

## 第二章、开始吧!!!

### 2.1、第一问变量的作用域

1. **let:**不允许未定义就使用;不允许重复声明

   ```javascript
   console.log(k);//Uncaught ReferenceError: k is not defined   犯了未定义就使用的错误
   let k = 10;
   let k = 101;
   console.log(k);//Uncaught SyntaxError: Identifier 'k' has already been declared 犯了重复声明的错误
   ```

2. **let:**创建的是局部变量(块级),var创建的是全局变量 ============>>>>>>>>>>不要再用var了

   ```javascript
   //先来喵喵var
   for (var i = 0; i < 5; i++) {
      console.log("用var时for循环里的i:" + i);//正常for循环
   }
   console.log("用var时for循环外的i:" + i);//正常输出 ‘用var时for循环外的i:5’
   
   //那神奇的let呢
   for (let j = 0; j < 5; j++) {
       console.log("用let时for循环里的j:" + j);//正常for循环
   }
   console.log("用let时for循环外的j:" + j);//输出 Uncaught ReferenceError: j is not defined
   ```

3. **let:**同一个块,不允许重复声明变量

   ```javascript
   //先来喵喵var
   function show(args) {
       var args = "9999";
       console.log(args); //可以正常输出 结果是9999
   }
   show("0987");
   
   //那神奇的let呢
   function show1(args) {
       let args = "8888";//传入的args与这里的args重复声明了
       console.log(args); //Uncaught SyntaxError: Identifier 'args' has already been declared 
   }
   show1("0987");
   function show2(args) { 
       {
           let args = "6666";
           console.log(args); //可以正常输出 结果是6666 加上{}改变了命运
       }
   }
   show2("0987");
   ```

4. **const:**代表是常量 是不可以修改的

   ```javascript
   const x = 2; //要注意const声明的常量不是值不能动,而是指向的那个内存地址所保存的数据不得改动
   x=991;
   console.log(x); //Uncaught TypeError: Assignment to constant variable.
   ```

### 2.2、对JS字符串的处理

1. 先来聊聊str.indexOf()方法

   ```javascript
   let str = "https://www.baidu.com/";
   let n1=str.indexOf("www");//存在返回结果不是-1 不存在返回结果是-1
   console.log("str.includes()方法:"+n1);//输出 str.includes()方法:8
   ```

2. str.includes()方法

   ```javascript
   //str.includes()方法:查找需要搜索的字符串(是否包含) 有返回true,无返回false;
   let str = "https://www.baidu.com/";
   let n2=str.includes("yyy");//存在返回true,不存在返回false
   console.log("str.startsWith()方法:"+n2);//输出 str.startsWith()方法:false
   ```

3. str.startsWith()方法

   ```javascript
    // str.startsWith()方法:是否以...字符串开头,两个参数,第二个参数为下标,可选  正确返回true,错误返回false;
   let str = "https://www.baidu.com/";
   let n3=str.startsWith("https");//是不是以https开头 是返回true,不是返回false
   console.log("str.startsWith()方法:"+n3);//输出 str.startsWith()方法:true
   let n4=str.startsWith("baidu",12);//第12位开始是不是以baidu开头 是返回true,不是返回false
   console.log("str.startsWith()方法[从某一位置开始数]:"+n4);//输出 str.startsWith()方法[从某一位置开始数]:true
   ```

4. str.endsWith()方法

   ```javascript
   //str.endsWith()方法:是否以...字符串结尾,两个参数,第二个参数代表的是“前几个”的意思(从1开始数),可选  正确返回true,错误返回false。
   let str = "https://www.baidu.com/";
   let n5=str.endsWith("com");//是不是以com结尾 是返回true,不是返回false
   console.log("str.endsWith()方法:"+n5);//输出 str.endsWith()方法:false
   let n6=str.endsWith("www",11);//前11位是不是以www结尾 是返回true,不是返回false
   console.log("str.endsWith()方法[“前几个”是不是以指定字符结尾(切记是从1开始数)]:"+n6);//输出 true
   ```

### 2.3、提高JS拼接字符串速度

```javascript
//变量的玩法
let userName = "xiaoming";
let userAge = 12;
let logo = "1.jpg";
//let str = "name=" + userName + ",age=" + userAge + ",logo=" + logo;
let str = `name1=${userName},age1=${userAge},logo1=${logo}`;
console.log(str);//输出    name1=xiaoming,age1=12,logo1=1.jpg

//方法的玩法
function showUser(){
    return "12456789";
}
console.log(`我的内容是:${showUser()}.`);//输出  我的内容是:12456789.

//进阶的玩法
function showUser(a, b, c, d) {
    return a[0] + b + a[1] + c + a[2] + d;
}
let userName = "xiaoming";
let userAge = 12;
let logo = "pic1.jpg";
let out = showUser`name=${userName},age=${userAge},logo=${logo}.`;
console.log(out);//输出   name=xiaoming,age=12,logo=pic1.jpg

function showUser1(userName, userAge, logo) {
    return showUser`name=${userName},age=${userAge},logo=${logo}.`;
}
console.log(showUser1("zhangsan", "45", "pic2.jpg"));//输出   name=xiaoming,age=12,logo=pic1.jpg
```

### 2.4、提高JS函数编写速度

1. 函数参数的默认值、多参数写法

   ```javascript
   function fun1(x=0,y=2){
       return x+y;
   }
   console.log(fun1(2,6));//8
   console.log(fun1(2));//4
   
   function fun2(...n){
       console.log(n.length);//5
       for(i=0;i<n.length;i++){
           console.log(n[i]);//1 2 3 4 5
       }
   }
   fun2(1,2,3,4,5);
   ```

2. 箭头函数

   ```javascript
   let fun3 = (x, y = 1) => {//设定y的默认值是1
       return x + y;
   };
   console.log(fun3(3, 7)); //10
   console.log(fun3(4)); //5
   
   let fun4 = (x) => {//一个参数时可简写为let fun4 =x=> {} 去掉括号()
       return x + 1;
   };
   //let fun4 = (x) => x + 1;终极简写 {}括号里面只有一句执行语句时
   console.log(fun4(16));//17
   ```

3. 函数尾调用

   ```javascript
   //切记:尾的概念是最后一步不是最后一行调用其他函数或者自己(递归)
   //尾调用可优化内存空间，递归是尾优化的典型应用
   
   //简单案例
   let fun1 = (x, y) => x + y;
   let fun2 = () => {
       return fun1(2, 3);
   };
   console.log(fun2());//5
   
   //不属于尾调用
   let fun3 = () => {let n = fun1(2, 3);return n;};
   let fun4 = () => {return fun1(2, 3) + 1;};
   
   //进阶案例
   let factorial1 = (n) => {
       if (n <= 1) {
           return 1;
       } else {
           return n * factorial1(n - 1); //这已经不是尾调用
       }
   };
   console.log(factorial1(5));//120
   
   let factorial2 = (n, p = 1) => {
       if (n <= 1) {
           return 1 * p;
       } else {
           let result = n * p;
           return factorial2(n - 1, result);
       }
   };
   console.log(factorial2(5));//120
   ```

### 2.5、新增的几种循环方法

1.    常规循环方法:while、for...

2. for...in循环、for...of循环

   ```javascript
   let list = [3, 6, 9, 1, 5, 9];
   //for...in循环
   for (const i in list) {
       console.log(i); //输出数组的下标
       console.log(list[i]); //输出数组下标对应的值
   }
   //for...of循环
   for (const n of list) {
       console.log(n); //输出数组下标对应的值
   }
   ```

3. forEach循环

   ```javascript
   list.forEach((n,i) => {
       console.log(n); //输出数组下标对应的值
       console.log(i); //输出数组的下标
   });
   ```

### 2.6、...:扩展运算符

```javascript
//let add = (a,b,c,d) => {//小学生的写法
let add = (...c) => {
    // return c[0]+c[1]+c[2]+c[3];//return返回数据 小学生的写法
    
    //升级的return写法
    let sum = 0;
    for (const num of c) {
        sum += num;
    }
    return sum;
};
let num = [1, 5, 5, 9];
let n = add(...num);
console.log(n); //输出 20
```

### 2.7、filer 过滤

```javascript
let num = [1, 5, 5, 9];
//常规写法
let num1 = num.filter(function (x) {
    return x != 5;
});
//简写
let num1 = num.filter((x) => x != 5);
console.log(num1);//输出 [1, 9]
```

### 2.8、Set的应用场景

```javascript
//1.去重
let arr = [3, 5, 7, 5, 2, 1];
let set1 = new Set(arr); //利用Set()自带功能实现去重
console.log(set1); //输出 arr[3,5,7,2,1]

let set2 = new Set([4, 6, 8, 2, 1]);
let set3 = new Set([3, 6, 8, 7, 1]);

//2.合并
let set4 = new Set([...set2, ...set3]); //先利用扩展运算符遍历 再合并两个set 并去重
console.log(set4);//4 6 8 2 1 3 7

//3.交集
let set5 = new Set([...set2].filter((x) => set3.has(x))); 
 console.log(set5); // {6, 8, 1}

//4.差集
let set6 = new Set([...set2].filter((x) => !set3.has(x))); 
console.log(set6); //{4, 2}

let set7 = new Set(
    [...set2].filter(function (x) {
        return !set3.has(x);
    })
); //差集的常规写法
console.log(set7); //{4, 2}

//5.其他方法
set2.add(0); //往set2最后加一个0
set2.delete(8); //删掉set2中的8
console.log(set2); //输出 {4, 6, 2, 1, 0}
```

### 2.9、新增数据结构Map

### 2.10、利用module进行多模块计

```javascript
//xx.html文件
 <script type="module">
      import js1 from "./TestEs6/js/js1.js";
      console.log(js1.userName);
      console.log(js1.fun1(99));
      console.log(js1.fun2());
 </script>

//js1.js文件
import js2 from "./js2.js";
let m = 0;
function fun2() {
  return 666 + js2.m;
  return 666 ;
}
export default {
  userName: "xiaoming",
  fun1: (x) => {
    return `fun1=${x}`;
  },
  fun2: function () {
    return fun2();
  },
};

//js2.js文件
let m = 100;
let n = 200;
export default {
  "m": m,
};
```

