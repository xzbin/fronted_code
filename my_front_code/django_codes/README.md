# Django 
https://www.runoob.com/django/django-tutorial.html

## Django 简介
### MVC 与 MTV模型
* MVC 以一种插件式的、松耦合的方式连接在一起。
* ![MVC 简易图](https://www.runoob.com/wp-content/uploads/2020/05/ModelViewControllerDiagramZh.png)
    * 模型（M）- 编写程序应有的功能，负责业务对象与数据库的映射(ORM)。
    * 视图（V）- 图形界面，负责与用户的交互(页面)。
    * 控制器（C）- 负责转发请求，对请求进行处理
* 用户操作流程图：
![](https://www.runoob.com/wp-content/uploads/2020/05/1589776521-2356-JxrlTyMyPgYnQpOV.png)

* MTV 模型
* Django 的 MTV 模式本质上和 MVC 是一样的，也是为了各组件间保持松耦合关系，只是定义上有些许不同，Django 的 MTV 分别是指：
  * M 表示模型（Model）：编写程序应有的功能，负责业务对象与数据库的映射(ORM)。
  * T 表示模板 (Template)：负责如何把页面(html)展示给用户。
  * V 表示视图（View）：负责业务逻辑，并在适当时候调用 Model和 Template。

* MTV 的响应模式如下所示：
![MTV 的响应模式](https://www.runoob.com/wp-content/uploads/2020/05/MTV-Diagram.png)
* 用户操作流程
![用户操作流程图](https://www.runoob.com/wp-content/uploads/2020/05/1589777036-2760-fs1oSv4dOWAwC5yW.png)


## Django 管理工具
```
django-admin startproject HelloWorld
```
* 目录说明：

    * HelloWorld: 项目的容器。
    * manage.py: 一个实用的命令行工具，可让你以各种方式与该 Django 项目进行交互。
    * HelloWorld/__init__.py: 一个空文件，告诉 Python 该目录是一个 Python 包。
    * HelloWorld/asgi.py: 一个 ASGI 兼容的 Web 服务器的入口，以便运行你的项目。
    * HelloWorld/settings.py: 该 Django 项目的设置/配置。
    * HelloWorld/urls.py: 该 Django 项目的 URL 声明; 一份由 Django 驱动的网站"目录"。
    * HelloWorld/wsgi.py: 一个 WSGI 兼容的 Web 服务器的入口，以便运行你的项目。

* path, url, re_path
```
path(route, view, kwargs=None, name=None)
```

## Django 模板
