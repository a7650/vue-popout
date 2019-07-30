# 🛸vue-popout
### vue弹窗管理，可以方便管理你的应用窗口，可以像原生app一样使用左滑/后退来进行操控。

[npm v1.0.2][npm-url]


[npm-url]: https://www.npmjs.com/package/vue-popout

### 使用方法

#### 安装

`npm install vue-popout`

#### 使用

main.js>

      `import vuePopout from "vue-popout"`
      
      `Vue.use(vuePopout)`
    
使用`Vue.use(vuePopout)`之后你将会有一个全局的popout方法（通过vm.popout(String)调用）和注册到全局的模块`<popout>`
      
### popout(String)方法

     该方法参数为String类型，该值是你要打开的窗口名称。使用`vm.popout("a")`，窗口a就会被打开。
     
### `<popout>`模块的props

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
           
           shrink:逐渐缩小。
           
           enlarge:逐渐放大。
           
      `filterAnimation`(String):背景的进入/离开动画,所有可选属性同上，默认为fade。
      
      `filterOpacity`(String):背景透明度，为0-1之间的数值，默认值为0.6.
     
     
 







      
      
      
      
      
      
      
      
      
      
      
      
      
      
