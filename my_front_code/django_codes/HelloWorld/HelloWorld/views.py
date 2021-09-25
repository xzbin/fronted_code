from django.http import HttpResponse
 
def hello(request):
    return HttpResponse("Hello world ! abc")

# from django.shortcuts import render
# def runoob(request):
#     context          = {}
#     context['name'] = 'runoob.html Hello World!'
#     return render(request, 'runoob.html', context)

from django.shortcuts import render

def runoob(request):
    views_list = ["ABC bdef","菜鸟教程1","菜鸟教程2","菜鸟教程3"]
    return render(request, "runoob.html", {"views_list": views_list})
    # return HttpResponse("runoob.html Hello World!")