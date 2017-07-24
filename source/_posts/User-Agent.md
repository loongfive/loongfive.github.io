title: "User-Agent（浏览器标识）的修改"
date: 2012-11-18 10:17:12
tags:
---
先说明一下UA是什么，User Agent中文名为用户代理，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等。

一些网站常常通过判断 UA 来给不同的操作系统、不同的浏览器发送不同的页面，因此可能造成某些页面无法在某个浏览器中正常显示，但通过伪装 UA 可以绕过检测。

查看自己的UA，很简单，访问这个地址就能看到了：http://www.useragentstring.com/

可以很清楚的看到我是ubunru12.04+chrome浏览器，这样的默认环境我只要一登录中国移动的网上营业厅，就直接给我跳转到了wap.js.1086.cn，（我家里是移动宽带），囧死了，其实之前也碰到过被几个其他的网站识别成手机用户，直接跳转到网站的wap版。。。很无语，不过今天在微薄上被人一提醒，哦，对的，可以修改浏览器UA试试看。

收集了几个常见的浏览器的修改方法在下面：

<!--more-->

>IE浏览器修改User-agent，修改注册表

>User-Agent在注册表的位置
[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionInternet SettingsUser-AgentPost Platform] 下，新建字符串值，内容留空，名字为你想在 User-Agent 中加入的字符，这里以 “motorolarokre2″为例。修改注册表对应的 REG 文件如下：
Windows Registry Editor Version 5.00

>[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionInternet SettingsUser-AgentPost Platform]
“motorolarokre2″=””

>修改后重启IE浏览器即可。

>IE的user-agent取值，下面是下列地址的组合+一些默认值
HKCUSoftwareMicrosoftWindowsCurrentVersionInternet SettingsUser-AgentPost Platform
HKLMSoftwareMicrosoftWindowsCurrentVersionInternet SettingsUser-AgentPost Platform
HKLMSoftwareMicrosoftWindowsCurrentVersionInternet Settings5.0User-AgentPost Platform

>IE8的User-Agents：

>IE8 on Windows Vista (兼容浏览)
Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0)

>IE8 on Windows Vista
Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)

>IE8 on Windows 7
Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)

>64-bit IE on 64-bit Windows 7:
Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0)

>32-bit IE on 64-bit Windows 7:
Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0)

>FireFox修改User-agent

>方法1：

>在地址栏输入“about:config”，按下回车进入设置菜单。

>找到“general.useragent.override”，如果没有这一项，则点右键“新建”->“字符串”，输入这个字符串。

>将其值设为自己想要的UserAgent。

>方法2：

>安装插件：User Agent Switcher

>Chrome修改User-agent

>方法一：启动时加上参数：–user-agent=”你自己的UserAgent”

>方法二：修改chrome.dll。把里面疑似UserAgent的字符串改为自己的。

修改之后我的火狐已经华丽丽的变身为win7+IE8了：

也终于可以看到完整版的移动网厅了
