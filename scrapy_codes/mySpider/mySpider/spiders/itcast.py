import scrapy
import logging

logger = logging.getLogger("simple_example")
logger.setLevel(logging.INFO)


class ItcastSpider(scrapy.Spider):
    name = "itcast"
    allowed_domains = ["runoob.com"]
    # start_urls = (
    #     'http://www.itcast.cn/',
    # )
    start_urls = ("https://www.runoob.com/w3cnote/scrapy-detail.html",)

    # def parse(self, response):
    #     pass
    def parse(self, response):
        # print("-----------------------------")
        # print("-----------------------------")
        # print(response)
        # print(response.text)
        # print("-----------------------------")
        # print("-----------------------------")
        # filename = "teacher.html"
        # /html/body/div[3]/div/div[2]/div
        context = response.xpath("/html/body/div[3]/div/div[2]/div/div/a")
        for c in context:
            text = c.extract()
            print(text)
            # break
        
        # logger.info("context: {}".format(context.extract_first()))
        # logger.info("context: {}".format(context.data))

        # open(filename, 'w',encoding="utf-8").write(response.text)
