# -*- coding: utf-8 -*-
# @Time    : 2021/9/27 19:02
# @Author  : zhoubin3
"""
"""

from scrapy import Selector
doc = """
... <div>
...     <ul>
...         <li class="item-0"><a href="link1.html">first item</a></li>
...         <li class="item-1"><a href="link2.html">second item</a></li>
...         <li class="item-inactive"><a href="link3.html">third item</a></li>
...         <li class="item-1"><a href="link4.html">fourth item</a></li>
...         <li class="item-0"><a href="link5.html">fifth item</a></li>
...     </ul>
... </div>
... """
sel = Selector(text=doc, type="html")
a = sel.xpath('//li//@href').extract()
print(a)

# [u'link1.html', u'link2.html', u'link3.html', u'link4.html', u'link5.html']
b = sel.xpath('//li[re:test(@class, "item-\d$")]//@href').extract()
print(b)
# [u'link1.html', u'link2.html', u'link4.html', u'link5.html']