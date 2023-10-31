title: "三台无线路由器组建大范围覆盖的无线网络"
date: 2012-08-16 10:17:12
tags:
---
之前公司有N台无线路由器和AP用作无线网络，但是每个接入点设置了单独的无线名称SSID，因为覆盖面积比较大，使用不是很方便，需要单独连接各个无线网络。

所以打算将各个接入点统一，实现一个大范围的无线网络，用户的电脑或手机等终端只需接入之后，可以在覆盖范围内任意移动，电脑会自动接入最近的无线设备，实现不间断的漫游。

操作起来很简单，我用了三台无线路由器来覆盖无线网络。

公司网络的结构很简单，光线接入，有一台作为网关的hillstone，然后是数台二层交换机，连接每个人的电脑。

三台无线路由器设置相同的SSID、加密方式和密码，需要注意的是设置不同的信道，比如说我的三台设备分别设置的是1、6、11，不然如果相同的信道如果覆盖范围重叠的话会有冲突。然后给每台无线路由器设置一个固定的局域网ip，这样不管是有线还是无线都可以方便的通过这个ip来管理，还有就是注意关闭无线路由器的DHCP服务，不然会和网关冲突，因为三台路由我都是网线直接插的LAN口当AP使用。

设置之后就可以把三台无线路由布置到合理的位置插上电源和网线就可以工作了。

找台笔记本测试了一下效果，连上无线之后，打开个命令行，

	ping baidu.com -t

可见连接非常稳定，然后捧着笔记本从一台路由走到另一台路由附近，可以明显的观察到无线的信号从强变弱，又从弱便强，期间网络一直没有间断。

至此完活儿收工。