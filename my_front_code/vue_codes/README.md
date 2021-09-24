
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
