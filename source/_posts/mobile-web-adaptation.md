---
title: 移动端H5页面适配方案
date: 2020-04-28 15:05:12
tags:
---

移动端H5的适配我们采用 vw + rem 方案

说明如下（假设设计图宽度为750px时）：

设置 html { font-size: 100px; }

设置媒体查询，当视窗小于750px时，使用 vw 动态计算 html 的 font-size，计算公式：100 / 750 * 100 vw

设置 img { max-width: 100%; }

    html { font-size: 100px; }

    @media screen and (max-width: 750px) {
      html {
        font-size: 13.333333vw;
      }
    }

    img { max-width: 100%; }

正常编写 css，所有尺寸均使用 rem 做单位，计算方式：设计图量取的 px 值除以100

例如：

100px => 1rem

55px => .55rem

1366px => 13.66rem

页面中的所有 img 标签如果宽度不是100%，需要设定 rem 单位的尺寸

所有背景图片需要设置 background-size