title: "win+ubuntu双系统时间不一致"
date: 2012-11-11 10:17:12
tags:
---
之前也是双系统，没遇到过这问题。只是前阵子把硬盘格掉后先装的ubuntu，后装的win7，问题就出现了，ubuntu时间正常，win下时间就差了8小时。以下解决办法为转载：

最近装了ubuntu和win7双系统，但是发现每次进入win7后时间总是不对，总是比当地时间晚8个小时，每次在win7下调整好之后，但是再一次进入win7系统后，时间又变回去了，于是在网上搜索一下原因原来是两个系统读取时间的机制不一样，现在来具体的说一下原因和解决办法吧：

原因所在：

UTC即Universal Time Coordinated，协调世界时
GMT即Greenwich Mean Time，格林尼治平时
Windows 与 Mac/Linux 缺省看待系统硬件时间的方式是不一样的：
Windows把系统硬件时间当作本地时间(local time)，即操作系统中显示的时间跟BIOS中显示的时间是一样的。
Linux/Unix/Mac把硬件时间当作 UTC，操作系统中显示的时间是硬件时间经过换算得来的，比如说北京时间是GMT+8，则系统中显示时间是硬件时间+8。
这样，当PC中同时有多系统共存时，就出现了问题。

假如你的ubuntu设置的时区都为北京时间东八区，当前系统时间为9：00AM。则此时硬件中存储的实际是UTC 时间1:00AM。这时你重启进入Windows后，你会发现windows系统中显示的时间是 1:00AM，比ubuntu中慢了八个小时。同理，你在Windows中更改或用网络同步了系统时间后，再到Ubuntu中去看，系统就会快了8小时。

在实行 夏令时的地区，情况可能会更复杂些。

解决方法：

第一种在Windows下进行如下修改：

在注册表项：HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation\
下中添加一项数据类型为REG_DWORD，名称为RealTimeIsUniversal，值设为1 的键值。

或者将以下程序代码拷贝到记事本上，然后把记事本的后缀改成CMD，然后双击就可以了

	@echo off
	color 0a
	Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1
	echo.
	echo 已让Windows识别存贮在主板CMOS内的时间为格林威治标准时间（GMT）,即系统根据CMOS时间和设置的时区来确定当前系统的时间。
	echo.
	pause

第二种方法在Ubuntu下进行如下修改：

ubuntu默认开启UTC,即协调世界时，而win7是使用这种计时方式，这将导致的结果就是Windows和Ubuntu时间计算有差异
你可以使用以下方法得到一致的时间：
sudo gedit /etc/default/rcS
找到这一行：UTC=yes
把 yes改为no