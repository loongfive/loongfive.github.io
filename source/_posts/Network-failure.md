title: "公司网络的一次小故障"
date: 2013-03-01 12:17:12
tags:
---
下午繁重的工作出现了一个小插曲，公司网络小范围掉线，毫无规律，第一反应去看一下办公室角落里接入层的交换机，简单的看了一下掉线情况，貌似集中在一台交换机上，以为交换机出了问题，马上去机房找了一台闲置的交换机过来想换上，结果还没动手就发现几乎所有人都掉线了。

公司的网络拓扑很简单，10M光纤，入口是一台艾泰路由器，下面有两层级联结构，一共5台24口的二层交换机，大概40台终端使用网络，所有终端处在一个网段内。路由器的两个lan口接到了两个部门，处在两个vlan中，其中我们的这边大约30多台电脑因为有共享需要之间没有任何端口隔离之类的设置，所以出了问题一时不好确定位置，不过好在网络规模小，找起来也不费劲，先从主路由器接线出来发现是可以上网的，那就还是下面的环节出了问题，一点点排除吧，先把问题确定到了一台交换机上，24个口，24根线，一根根拔了试，直到拔掉其中一根发现网络正常了，好吧，找到源头了。

公司有3台无线设备，基本上就把公司办公区的范围给覆盖了，顺着线其实是一台小的无线路由，这台小路由平时还算稳定，再一看，哈哈，原来它下面又接了一台无线路由，试了一试，果真就是它，原来有人想把它接上扩展一下无线信号却没接好，之前说了公司所有的终端都在一个网段下，所以几台无线路由器也都是直接当AP用的，所以线插错口了都会导致上不了网，搞定之后嘱咐了一下这边的使用人员，至此问题解决。

不过话说自从我接手了公司的网络管理工作之后真的还蛮少出现这种问题的，平时基本不需要管理，真不知道之前的时候公司有一个全职的网络管理员的岗位到底要做些什么。

年前把机房的服务器换上了ubuntu之后，到现在运行了一个多月，相当稳定，赞一个，而且看起来也比原来的2003专业多了，功能也强大的多，唯一有点小不爽的就是linux下搞asp有点费劲，不过不是问题，直接KVM一台Windows毫无压力

最近工作照旧，任务多，时间紧，靠出卖着劳动力挣着辛苦钱，不过成长与收获也是有的

自曝一下自己最近打发时间的好去处，在看《爱情自有天意》，吼吼，不要说我俗气，最近看了一篇分享，其中有一条缓解工作压力的好方法就是偶尔自己偷摸的“俗气”一下。。