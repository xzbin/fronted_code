# -*- coding: utf-8 -*-
# @Time    : 2021/9/27 18:02
# @Author  : zhoubin3
"""
"""

from lxml import etree

# import requests
#
# url = "https://www.runoob.com/w3cnote/scrapy-detail.html"
# response = requests.get(url)
# with open("./demo.html","w", encoding="utf-8") as f:
#     f.write(response.text)

html = etree.parse("./demo.html", etree.HTMLParser())

# 选择所有的节点
# nodes = html.xpath("//*")
# for node in nodes:
#     print(node)

# 选择所有的节点 a
# nodes = html.xpath("//a")
# for node in nodes:
#     print(node)


# / 或者 // 可以用来定位子节点或者子孙节点，例如定位 li 节点的所有 a 节点：
# nodes = html.xpath('//li/a/')
# for node in nodes:
#     print(node)

# ..选择父节点
# nodes = html.xpath('//li/a/..')
# for node in nodes:
#     print(node)

# ..选择属性
text = """
<div>
    <ul>
        <li class="pl2 p3"><a href="https://book.douban.com/subject/1007305/">红楼梦</a>
        <li class="pl2 p4"><a href="https://book.douban.com/subject/4913064/">活着</a></li>
        <li class="pl1 p5"><a href="https://book.douban.com/subject/6082808/">百年孤独</a></li>
        <li class="pl1 p5"  name="item1"><a href="https://book.douban.com/subject/4820710123/">1984</a></li>
        <li class="pl1 pl2" name="item1 item3"><a href="https://book.douban.com/subject/4820710/">1984</a></li>
    </ul>
</div>
"""
html = etree.HTML(text)
# nodes = html.xpath('//li/a/@href')
# for node in nodes:
#     print(node)

# 父节点属性
# nodes = html.xpath('//li/a[@href="https://book.douban.com/subject/1007305/"]/../@class')
# for node in nodes:
#     print(node)

# 属性有多值匹配
# nodes = html.xpath('//li[contains(@class, "pl1")]')
# print(nodes)


# 多个属性联合获取
# nodes = html.xpath('//li[contains(@class, "pl1") and contains(@name, "item1")]/a/@href')
# for node in nodes:
#     print(node)


# 文本获取
# result = html.xpath('//li[contains(@class, "pl1")]/a/text()')
# print(result)

# 如果改成 //text() 表达式，则可以获取所有子孙节点的文本
result = html.xpath('//li[contains(@class, "pl1")]//text()')
print(result)