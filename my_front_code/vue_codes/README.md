
https://www.runoob.com/vue2/vue-start.html

* 可以看到在 Vue 构造器中有一个el 参数，它是 DOM 元素中的 id。在上面实例中 id 为 vue_det，在 div 元素中
* data 用于定义属性，实例中有三个属性分别为：site、url、alexa。methods 用于定义的函数，可以通过 return 来返回函数值
  
## Vue.js 模板语法
* 使用 v-html 指令用于输出 html 代码：
* HTML 属性中的值应使用 v-bind 指令。
* 在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定：
* Vue.js 都提供了完全的 JavaScript 表达式支持。
* 指令是带有 v- 前缀的特殊属性。指令用于在表达式的值改变时，将某些行为应用到 DOM 上。如下例子：`v-if`, `v-on`
* 修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
* v-model 指令用来在 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值.
* 过滤器:Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示, 格式如下：{{ message | filterA | filterB }}
* 缩写
```
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>

<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```

## 条件判断
* 条件判断使用 v-if 指令：`v-if`
* 可以用 v-else 指令给 v-if 添加一个 "else" 块：`v-else`, `v-else-if`, 
* 我们也可以使用 v-show 指令来根据条件展示元素：`v-show`

## Vue.js 循环语句
## Vue.js 计算属性
* 计算属性关键词: computed。计算属性在处理一些复杂逻辑时是很有用的
* computed vs methods
  * 我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
  * vm.reversedMessage 依赖于 vm.message，在 vm.message 发生改变时，vm.reversedMessage 也会更新。
  * 可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性。
* computed setter
  * computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：

## Vue.js 监听属性
* 本章节，我们将为大家介绍 Vue.js 监听属性 watch，我们可以通过 watch 来响应数据的变化。

## Vue.js 样式绑定
* 我们可以为 v-bind:class 设置一个对象，从而动态的切换 class:
* 此外，我们也可以在这里绑定返回对象的计算属性。这是一个常用且强大的模式


## Vue.js 事件处理器
* 事件监听可以使用 v-on 指令：
* 事件修饰符
  * .stop - 阻止冒泡
  * .prevent - 阻止默认事件
  * .capture - 阻止捕获
  * .self - 只监听触发该元素的事件
  * .once - 只触发一次
  * .left - 左键事件
  * .right - 右键事件
  * .middle - 中间滚轮事件

## Vue.js 表单
* 你可以用 v-model 指令在表单控件元素上创建双向数据绑定。
* 在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：
```
<input v-model.lazy="msg" >
```
* 如果想自动将用户的输入值转为 Number 类型
```
<input v-model.number="age" type="number">
```
* 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：
```
<input v-model.trim="msg">
```

## Vue.js 组件
* 组件（Component）是 Vue.js 最强大的功能之一。
* prop 是子组件用来接受父组件传递过来的数据的一个自定义属性。
* 动态 Prop
  * 类似于用 v-bind 绑定 HTML 特性到一个表达式，也可以用 v-bind 动态绑定 props 的值到父组件的数据中。每当父组件的数据变化时，该变化也会传导给子组件
* 以下实例中使用 v-bind 指令将 todo 传到每一个重复的组件中：
* 注意: prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。

## Vue.js 组件 - 自定义事件
* 父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！
* 如果你想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on 。例如：
```
<my-component v-on:click.native="doTheThing"></my-component>
```

## Vue.js 自定义指令
* 除了默认设置的核心指令( v-model 和 v-show ), Vue 也允许注册自定义指令
* 使用 directives 选项来注册局部指令
* 钩子函数
  * bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
  * inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
  * update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
  * componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
  * unbind: 只调用一次， 指令与元素解绑时调用。
* 钩子函数参数
  * el: 指令所绑定的元素，可以用来直接操作 DOM 。
  * binding: 一个对象，包含以下属性：
    * name: 指令名，不包括 v- 前缀。
    * value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
    * oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
    * expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
    * arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
    * modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, * bar: true }。
  * vnode: Vue 编译生成的虚拟节点。
  * oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

## Vue.js 路由
* Vue.js 路由允许我们通过不同的 URL 访问不同的内容。

## Vue.js 过渡 & 动画
* Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。Vue 提供了内置的过渡封装组件，该组件用于包裹要实现过渡效果的组件。
```
<transition name = "nameoftransition">
   <div></div>
</transition>
```


