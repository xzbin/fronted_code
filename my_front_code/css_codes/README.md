# css 教程
https://www.runoob.com/css/css-tutorial.html

# 什么是CSS？
* CSS 指层叠样式表 (Cascading Style Sheets)
* 样式定义如何显示 HTML 元素
* 样式通常存储在样式表中
* 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
* 外部样式表可以极大提高工作效率
* 外部样式表通常存储在 CSS 文件中
* 多个样式定义可层叠为一个

# CSS 实例
* CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明
![](https://www.runoob.com/wp-content/uploads/2013/07/632877C9-2462-41D6-BD0E-F7317E4C42AC.jpg)

* 选择器通常是您需要改变样式的 HTML 元素。
* 每条声明由一个属性和一个值组成。
* 属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。
* CSS声明总是以分号(;)结束，声明总以大括号({})括起来:
```
p {color:red;text-align:center;}
```
* CSS注释以 /* 开始, 以 */ 结束

# id 和 class 选择器
## id 选择器
* id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。
* HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。

## class 选择器
* class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。
* class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点"."号显示
* 在以下实例中, 所有的 p 元素使用 class="center" 让该元素的文本居中:
```
p.center {text-align:center;}
```

# CSS 创建
## 如何插入样式表

* 外部样式表(External style sheet)
```
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
* 内部样式表(Internal style sheet)

```<head>
<style>
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("images/back40.gif");}
</style>
</head>
```
* 内联样式(Inline style)
```
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```

## 多重样式
* 如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。 
* （内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式

## CSS 背景
CSS 属性定义背景效果:
```
background-color
background-image
background-repeat
background-attachment
background-position
```

## CSS 文本格式
```
body {color:red;}
h1 {text-align:center;}
a {text-decoration:none;}
p.uppercase {text-transform:uppercase;}
p {text-indent:50px;}

```

## CSS 字体
* 通用字体系列 - 拥有相似外观的字体系统组合（如 "Serif" 或 "Monospace"）
* 特定字体系列 - 一个特定的字体系列（如 "Times" 或 "Courier"）
```
p{font-family:"Times New Roman", Times, serif;}
p.normal {font-style:normal;}
p.italic {font-style:italic;}
p.oblique {font-style:oblique;}
```
* 设置文字的大小与像素，让您完全控制文字大小：
```
h1 {font-size:40px;}
h2 {font-size:30px;}
p {font-size:14px;}
```
* 为了避免Internet Explorer 中无法调整文本的问题，许多开发者使用 em 单位代替像素。因此，1em的默认大小是16px。可以通过下面这个公式将像素转换为em：px/16=em
```
h1 {font-size:2.5em;} /* 40px/16=2.5em */
h2 {font-size:1.875em;} /* 30px/16=1.875em */
p {font-size:0.875em;} /* 14px/16=0.875em */
```
* 使用百分比和EM组合
```
body {font-size:100%;}
h1 {font-size:2.5em;}
h2 {font-size:1.875em;}
p {font-size:0.875em;}
```
## CSS 链接
* 链接的样式，可以用任何CSS属性（如颜色，字体，背景等）。
* 这四个链接状态是：
  * a:link - 正常，未访问过的链接
  * a:visited - 用户已访问过的链接
  * a:hover - 当用户鼠标放在链接上时
  * a:active - 链接被点击的那一刻
* 当设置为若干链路状态的样式，也有一些顺序规则：
    * a:hover 必须跟在 a:link 和 a:visited后面
    * a:active 必须跟在 a:hover后面
```
a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#00FF00;}  /* 已访问链接 */
a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
a:active {color:#0000FF;}  /* 鼠标点击时 */
```
* text-decoration 属性主要用于删除链接中的下划线：
* 背景颜色属性指定链接背景色：background-color

## CSS 列表
* list-style-type属性指定列表项标记的类型: `circle`, `square`, `upper-roman`, `lower-alpha`。
* list-style-image 指定列表项标记的图像，使用列表样式图像属性：`list-style-image: url('sqpurple.gif');`
* `padding`, `margin` , `background-repeat`,`background-position`, `padding-left` 分别代表什么意思呢？
* 所有CSS列表属性
    * list-style	简写属性。用于把所有用于列表的属性设置于一个声明中
    * list-style-image	将图像设置为列表项标志。
    * list-style-position	设置列表中列表项标志的位置。
    * list-style-type	设置列表项标志的类型。

## CSS 盒子模型
* CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。
![https://www.runoob.com/images/box-model.gif](https://www.runoob.com/images/box-model.gif)
不同部分的说明：
  * Margin(外边距) - 清除边框外的区域，外边距是透明的。
  * Border(边框) - 围绕在内边距和内容外的边框。
  * Padding(内边距) - 清除内容周围的区域，内边距是透明的。
  * Content(内容) - 盒子的内容，显示文本和图像。
* 