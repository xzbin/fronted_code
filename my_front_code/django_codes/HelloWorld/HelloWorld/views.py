import json
from django.shortcuts import render
from django.http import HttpResponse
import datetime


def hello(request):
    return HttpResponse("Hello world ! abc")

# from django.shortcuts import render
# def runoob(request):
#     context          = {}
#     context['name'] = 'runoob.html Hello World!'
#     return render(request, 'runoob.html', context)


def runoob(request):
    views_list = ["ABC bdef", "菜鸟教程1", "菜鸟教程2", "菜鸟教程3"]
    name = "123456"
    now = datetime.datetime.now()
    url = "<a href='https://www.runoob.com/'>点击跳转</a>"
    views_dict = {"name": "菜鸟教程", "age": 18}
    return render(request, "runoob.html", {"views_list": views_list, 'name': name, "time": now, "url": url, "views_dict": views_dict})
    # return HttpResponse("runoob.html Hello World!")


def test_json(request):
    # if request.method == "GET":
    print(request.POST)
    print(request.GET)
    if request.method == 'POST':
        infos = {"name": "xzbin", "age": 18, "zh_name": "小花"}

    else:
        infos = {"name": "xzbin", "age": 18}
        # return HttpResponse(json.dumps(infos,ensure_ascii=False))
    print(request.method)
    try:
        # print("GET username ", request.GET.get("username", ""))
        # print("GET password ",request.GET.get("password",  ""))

        print("POST username ", request.POST.get("username", ""))
        print("POST password ", request.POST.get("password",  ""))
    except Exception as e:
        print(e)
    return HttpResponse(json.dumps(infos, ensure_ascii=False))


# 定义功能
def add_args(a, b):
    return a+b

# 接口函数


def post(request):
    if request.method == 'POST':  # 当提交表单时
        dic = {}
        # 判断是否传参
        if request.POST:
            a = request.POST.get('a', 0)
            b = request.POST.get('b', 0)
            # 判断参数中是否含有a和b
            if a and b:
                res = add_args(a, b)
                dic['number'] = res
                dic = json.dumps(dic)
                return HttpResponse(dic)
            else:
                return HttpResponse('输入错误')
        else:
            return HttpResponse('输入为空')

    else:
        return HttpResponse("方法错误")
