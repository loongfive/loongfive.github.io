---
title: "301重定向的应用一则"
date: 2011-08-18 07:27:48
tags: seo
---

301重定向对于SEO的作用就不多强调了，用于网址的永久变更，而且会把权重啊、PR啊什么的全部转移到新的网址上。

这里说一下利用301重定向功能把网站的地址统一为loongfive.info，就是不带www的形式。

实现301重定向的方法很多种，这里用的是.htaccess实现301转向，在.htaccess文件中加入如下语句：

	RewriteEngine on
	RewriteCond %{HTTP_HOST} ^www\.loongfive\.info$ [NC]
	RewriteRule ^(.*)$ http://loongfive.info/$1 [L,R=301]

记得把上面的域名部分改掉。

这样以后在访问带有www的链接的时候就自动跳转到了不带www的地址了。

这几行代码很简单，要是想把地址都统一成带www的形式也很简单，套着格式改一下就行。