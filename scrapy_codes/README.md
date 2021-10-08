

* https://www.runoob.com/w3cnote/scrapy-detail.html

* 数据流向

![数据流向](https://www.runoob.com/wp-content/uploads/2018/10/8c591d54457bb033812a2b0364011e9c_articlex.png)

* Scrapy Engine(引擎): 负责Spider、ItemPipeline、Downloader、Scheduler中间的通讯，信号、数据传递等。
* Scheduler(调度器): 它负责接受引擎发送过来的Request请求，并按照一定的方式进行整理排列，入队，当引擎需要时，交还给引擎。
* Downloader（下载器）：负责下载Scrapy Engine(引擎)发送的所有Requests请求，并将其获取到的Responses交还给Scrapy Engine(引擎)，由引擎交给Spider来处理，
* Spider（爬虫）：它负责处理所有Responses,从中分析提取数据，获取Item字段需要的数据，并将需要跟进的URL提交给引擎，再次进入Scheduler(调度器).
* Item Pipeline(管道)：它负责处理Spider中获取到的Item，并进行进行后期处理（详细分析、过滤、存储等）的地方。
* Downloader Middlewares（下载中间件）：你可以当作是一个可以自定义扩展下载功能的组件。
* Spider Middlewares（Spider中间件）：你可以理解为是一个可以自定扩展和操作引擎和Spider中间通信的功能组件（比如进入Spider的Responses;和从Spider出去的Requests）


```
scrapy startproject mySpider
```

* 介绍各个文件的作用
  * scrapy.cfg: 项目的配置文件。
  * mySpider/: 项目的Python模块，将会从这里引用代码。
  * mySpider/items.py: 项目的目标文件。
  * mySpider/pipelines.py: 项目的管道文件。
  * mySpider/settings.py: 项目的设置文件。
  * mySpider/spiders/: 存储爬虫代码目录



# XPath 教程
## XPath 简介
## XPath 节点
* 在 XPath 中，有七种类型的节点：元素、属性、文本、命名空间、处理指令、注释以及文档（根）节点。XML 文档是被作为节点树来对待的。树的根被称为文档节点或者根节点.

## XPath 语法
### 选取节点
* nodename	选取此节点的所有子节点。
* /	从根节点选取（取子节点）。
* //	从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置（取子孙节点）。
* .	选取当前节点。
* ..	选取当前节点的父节点。
* @	选取属性。

### 选取节点【例子】
* bookstore	选取 bookstore 元素的所有子节点。
* /bookstore	选取根元素 bookstore。注释：假如路径起始于正斜杠( / )，则此路径始终代表到某元素的绝对路径！
* bookstore/book	选取属于 bookstore 的子元素的所有 book 元素。
* //book	选取所有 book 子元素，而不管它们在文档中的位置。
* bookstore//book	选择属于 bookstore 元素的后代的所有 book 元素，而不管它们位于 bookstore 之下的什么位置。
* //@lang	选取名为 lang 的所有属性。

### 谓语（Predicates）【例子】
* /bookstore/book[1]	选取属于 bookstore 子元素的第一个 book 元素。
* /bookstore/book[last()]	选取属于 bookstore 子元素的最后一个 book 元素。
* /bookstore/book[last()-1]	选取属于 bookstore 子元素的倒数第二个 book 元素。
* /bookstore/book[position()<3]	选取最前面的两个属于 bookstore 元素的子元素的 book 元素。
* //title[@lang]	选取所有拥有名为 lang 的属性的 title 元素。
* //title[@lang='eng']	选取所有 title 元素，且这些元素拥有值为 eng 的 lang 属性。
* /bookstore/book[price>35.00]	选取 bookstore 元素的所有 book 元素，且其中的 price 元素的值须大于 35.00。
* /bookstore/book[price>35.00]//title	选取 bookstore 元素中的 book 元素的所有 title 元素，且其中的 price 元素的值须大于 35.00。



# 收集项目
* https://github.com/search?o=desc&q=Scrapy&s=stars&type=Repositories