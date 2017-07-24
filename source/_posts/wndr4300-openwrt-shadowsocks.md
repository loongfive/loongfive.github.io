title: NETGEAR 网件WNDR4300刷openwrt shadowsocks科学上网
date: 2015-03-15 02:40:26
tags: openwrt
---
我也是小白，分享下自己成功的步骤，希望可以帮到和我一样的小白们，要是我有没做对的、或者需要改进的，大侠们请指点。

主要是分步骤

1.准备工作：

2.刷openwrt/安装shadowsocks/安装shadowsocks GUI/安装Chinadns/ChinadnsGui；

3.配置；


准备工作：

路由4300，用牙签撸到绿灯稳定的一亮一亮，

修改本机IP：192.168.1.2 网关 255.255.255.0 路由：192.168.1.1

然后使用tftp 刷openwrt 

我是下载原版的最新版本。

下载地址：
http://downloads.openwrt.org/barrier_breaker/14.07/ar71xx/nand/openwrt-ar71xx-nand-wndr4300-ubi-factory.img

（小白问题：我是OSX，但是不知道怎么在OSX刷openwrt，我时用得Winodws连网线刷，高手请留言告知，谢谢）

正常的话，路由闪几下就启动了。如果wifi没有，按下路由上的wifi按钮，2G，5G都亮了。我时没有，按了下2g、5g就出来了。

开始安装 ss，ssgui，chinadns，chinadnsgui

我用的是aa65535这哥们的编译版本，看他得说明，反正不错！

https://github.com/aa65535/openwrt-shadowsocks

我这里用到的最新版本ss，ssgui，chinadns，chinadnsgui 

打包下载地址： http://pan.baidu.com/s/1dD3sf5J


开始安装：

解压出来后，将 所有的ipd 上传到 /tmp

    scp *.ipk root@192.168.1.1:/tmp

安装

    opkg install *.ipk

如果出现错误，依赖包的没有，安装下：

    opkg install libopenssl 

或者

    opkg install libpolarssl


接着修改dnsmasq

    vim /etc/dnsmasq.conf

最后加入

    no-resolv
    server=127.0.0.1#5353

好了，现在就是基本都ok了。

接着去 面板里 修改ss的服务器信息就ok了

然后就可以翻墙了。

<!--more-->

![](/images/wndr4300-openwrt-shadowsocks.jpg)

原文地址：http://www.v2ex.com/t/146909