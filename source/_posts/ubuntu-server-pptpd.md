title: "ubuntu server 下pptpd搭建VPN服务器"
date: 2013-02-24 10:15:21
tags: ubuntu
---

1\. 安装pptpd

	sudo apt-get install pptpd

2\. 修改 /etc/pptpd.conf，配置localip和remoteip

    localip 10.200.0.1
    remoteip 10.200.0.2-100

3\. 修改 /etc/ppp/pptpd-options，配置dns

    ms-dns 8.8.8.8
    ms-dns 8.8.4.4

4\. 修改 /etc/ppp/chap-secrets，配置用户名/密码

    # client    server  secret          IP addresses
    user         *   password    *

5\. 修改 /etc/sysctl.conf，取消下面这行的注释，并重新载入新的sysctl配置

    net.ipv4.ip_forward=1
    sudo sysctl -p

6\. 利用iptables建立一个NAT

    sudo apt-get intall iptables
    sudo iptables -t nat -A POSTROUTING -s 10.200.0.0/24 -o eth0 -j MASQUERADE
    sudo iptables-save > /etc/iptables-rules // 保存配置

修改 /etc/network/interfaces，在eth0的设置最末尾加上 pre-up iptables-restore < /etc/iptables-rules

7\. 重起pptpd，搞定

碰到无法保存iptables规则的情况只需要sudo -s，然后再iptables-save > /etc/iptables-rules即可。