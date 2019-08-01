# 🛸vue-popout
### vue弹窗管理，可以方便管理你的应用窗口，可以像原生app一样使用左滑/后退来进行操控。

[npm v1.0.3][npm-url]


[npm-url]: https://www.npmjs.com/package/vue-popout

### 使用方法

## 安装

`npm install vue-popout`

## 使用

```javascript
import Vue from 'vue'
import vuePopout from "vue-popout"


Vue.use(vuePopout)
// 启动你的应用...
```

    
使用`Vue.use(vuePopout)`之后你将会有一个全局的popout实例（通过vm.popout访问）和注册到全局的模块`<popout>`

### `<popout>`模块

#### 可以在任意组件中使用popout模块

     你可以像普通模块一样给popout模块传递props来控制其行为。主要有以下参数：
     
     `name`(String):为该popout窗口的名称，即vm.popout()的第一个参数，传入该值即可打开窗口。默认为"default"。
     
     `type`(String):<popout>模块内为文本节点时使用该参数，通过该参数将文本作为弹窗显示，并应用对应的样式，
     
      支持以下属性：
     
           default:type的默认属性，内容正常显示，无额外行为。
           
           ordinary:普通类型弹窗，白色背景，黑色字体。
           
           warn:警告信息类型弹窗，会在普通类型弹窗上有一个黄色的叹号。
           
           error：错误信息类型弹窗，会在普通类型弹窗上有一个红色的叹号。
           
      `contentAnimation`(String):窗口的进入/离开动画，该属性可以设置你的窗口的进入动画，目前内置了以下几种动画：
      
           fade:默认属性，渐隐出现/消失。
      
           bottomToTop:从下向上出现。   
           
           rightToLeft:从右往左。
           
           bounce:抖动。
           
           shrink:缩小。
           
           enlarge:放大。
           
      `filterAnimation`(String):背景的进入/离开动画,所有可选属性同上，默认为fade。
      
      `filterOpacity`(String):背景透明度，为0-1之间的数值，默认值为0.6.
      
### popout实例

#### 可以在任意组件中通过vm.popout访问popout实例，该实例有多种属性和方法

#### 🌴popout属性

     `originUrl`:页面初始url，即打开窗口之前的url。
     
#### 🌴popout方法（popout中所有方法都支持链式调用）
     
      `open([name(必须)|String],[duration(可选)|String])`:打开某个窗口，name为popout模块的name，duration为打开的时间/ms，
      
            即一定时间后会关闭该窗口如果不传入duration参数则不会执行关闭动作。
      
      `back()`:回退，即关闭上一个窗口。
      
      `close([name(必须)|String],[flag(可选)|String])`:关闭窗口，name为要关闭窗口的名称，flag为一个标识符，可以传入next或
      
            previous，分别表示关闭name窗口的后一个或前一个窗口。
            
            *注意：在关闭某一个窗口时，所有在此窗口之后打开的窗口都会被关闭。
      
      `closeAll()`:关闭所有窗口。
      
      `currentStack()`:查看当前打开的窗口，返回一个数组，数组的顺序为窗口打开的顺序。
      
      `stackKeyMap()`:查看popoutVal(与窗口name对应的唯一随机序列，与地址栏中popout的值对应)与窗口name的对应关系。
      
            *注意：popoutVal值只使用一次，每次打开窗口都会有一个新的值生成，所以你只能查看当前打开的窗口的stackKeyMap。







      
      
      
      
      
      
      
      
      
      
      
      
      
      
