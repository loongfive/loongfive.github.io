title: "win主机通过自定义404页面来实现typecho永久链接"
date: 2012-06-01 01:42:26
tags: typecho
---

	<?php
	$qs = $_SERVER['QUERY_STRING'];
	$pos = strrpos($qs, '://');
	$pos = strpos($qs, '/', $pos + 4);
	$_SERVER['REQUEST_URI'] = substr($qs, $pos);
	$_SERVER['PATH_INFO'] = $_SERVER['REQUEST_URI'];
	include('index.php');

新建个php页面，保存上面的内容，然后自定义404页面为这个页面。

然后typecho后台强制开启永久链接，可以正常访问，但是后台无法使用，前台无法评论。

搜索论坛找到了答案，[原文链接](http://forum.typecho.org/topic.php?id=386)，现成的插件，装上就一切搞定，原文中有下载地址，FixIIS6Rewrite.zip ，也可以[点击这里](http://dl.dbank.com/c0cpjblvai)。