title: NETGEAR 网件WNDR4300刷openwrt shadowsocks科学上网
date: 2015-03-15 02:40:26
tags: openwrt
---

### 主要分3步：

1.准备工作；

2.刷openwrt/安装shadowsocks/安装shadowsocks GUI/安装Chinadns/ChinadnsGui；

3.配置；

## 准备工作：

路由4300，用牙签撸到绿灯稳定的一亮一亮，

修改本机IP：192.168.1.2 子网掩码：255.255.255.0

然后使用tftp 刷openwrt 

我是下载原版的最新版本

下载地址：http://downloads.openwrt.org/barrier_breaker/14.07/ar71xx/nand/openwrt-ar71xx-nand-wndr4300-ubi-factory.img

正常的话，路由闪几下就启动了，需要手动重启一下路由器，不然5G不正常

开始安装 ss，ssgui，chinadns，chinadnsgui

我用的是aa65535这哥们的编译版本，看他得说明，反正不错！

https://github.com/aa65535/openwrt-shadowsocks

我这里用到的最新版本ss，ssgui，chinadns，chinadnsgui 

打包下载地址： http://pan.baidu.com/s/1dD3sf5J

## 开始安装：

解压出来后，将 所有的ipk 上传到 /tmp

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

## 设置

![](/images/wndr4300-openwrt-shadowsocks.jpg)
