# 🛸vue-popout
### vue弹窗管理，接近native app体验。

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
      
#### popout(String)方法

     该方法参数为String类型，该值是你要打开的窗口名称。使用`vm.popout("a")`，窗口a就会被打开。
     
### `<popout>`模块的props

     你可以像普通模块一样给popout模块传递props来控制其行为。
     
 







      
      
      
      
      
      
      
      
      
      
      
      
      
      
