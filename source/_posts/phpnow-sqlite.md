title: "phpnow启用sqlite支持"
date: 2012-07-18 10:17:12
tags:
---
PHPnow 是 Win32 下绿色免费的 Apache + PHP + MySQL 环境套件包。就一个文件夹，绿色，往硬盘里一扔，随时启用随时关闭，默认环境即可搞定大部分的php应用。

默认不支持sqlite，启用方法如下：

打开php配置文件，不知道在哪就看一下<?php phpinfo(); ?>

我的phpnow默认是在 E:\phpnow\php-5.2.14-Win32\php-apache2handler.ini

找到这三行：

	extension=php_pdo.dll
	extension=php_pdo_sqlite.dll
	extension=php_sqlite.dll

把他们前面的分号去掉即表示启用

然后保存关闭即可

如果没生效就重启一下phpnow。

我测试了typecho，可以使用sqlite安装。