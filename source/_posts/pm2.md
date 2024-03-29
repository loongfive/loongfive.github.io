---
title: pm2简易使用教程
date: 2017-07-25 11:22:58
tags: 
- node
- 前端
---

简单记录一下如何在服务器上用pm2部署node项目。

## 常用命令：

先全局安装：

    npm i pm2 -g

启动项目：

    pm2 start app.js

ok! 项目已经跑起来了。

查看所有进程状态：

    pm2 list

更强大的监视界面：

    pm2 monit

想要开机自启动？先pm2 start程序，然后：

    pm2 save
    pm2 startup


## 更多用法

    npm install pm2 -g     # 命令行安装 pm2 
    pm2 start app.js -i 4  # 后台运行pm2，启动4个app.js 
                           # 也可以把'max' 参数传递给 start
                           # 正确的进程数目依赖于Cpu的核心数目
    pm2 start app.js --name my-api # 命名进程
    pm2 list               # 显示所有进程状态
    pm2 monit              # 监视所有进程
    pm2 logs               # 显示所有进程日志
    pm2 stop all           # 停止所有进程
    pm2 restart all        # 重启所有进程
    pm2 reload all         # 0 秒停机重载进程 (用于 NETWORKED 进程)
    pm2 stop 0             # 停止指定的进程
    pm2 restart 0          # 重启指定的进程
    pm2 startup            # 产生 init 脚本 保持进程活着
    pm2 web                # 运行健壮的 computer API endpoint (http://localhost:9615)
    pm2 delete 0           # 杀死指定的进程
    pm2 delete all         # 杀死全部进程