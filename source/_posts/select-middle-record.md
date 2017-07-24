title: "select查询中间记录的SQL语句"
date: 2011-10-02 06:14:12
tags:
---

在套一个CMS的模板，有这样一个新闻列表，第一条显示缩略图、标题、还有摘要，而后面的四条只显示标题，

模板文件中只能用这个CMS自己的标签，所以第一条新闻单独查询，后面的四条又用了一次循环查询的标签

查询第一条内容好办，但是跳过第一条记录查询第二条记录开始的往后四条记录就麻烦了点儿

	select top 4 * from news where cid=1 and newsid not in (select top 1 newsid from news where cid=1 order by newsid desc

嵌套了一个select