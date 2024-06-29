---
title: 编辑器 开发 Flutter 实用技巧
description:
categories: Note
date: 2024-06-28
tags: ["Flutter", "IDE"]
cover: https://qiniu.onion17.com/images/2024/06/26/04-38-45-6f61827dc31bea579799ee4961308bf7.png
author:
  name: 暮冬拾柒
  avatar: https://s2.loli.net/2024/06/26/hpinJ6Fb9UIZTCA.jpg
prev:
  text: "使用FVM管理Flutter版本"
  link: "/Notes/Flutter/fvm"
next:
  text: "Dart 基础语法"
  link: "/Notes/Flutter/dart"
---

## 使用 Android Studio 技巧

> Flutter 官方文档：[在 Android Studio 或 IntelliJ 里开发 Flutter 应用](https://docs.flutter.cn/tools/android-studio)

### Android Studio 快捷键

- 快速创建 Widget：在 `Dart` 文件中输入 `stf` 或 `stl` 出现提示后按回车即可。
- 快速修复：`option` + `entry`
- 自动生成构造函数：选中 `final` 参数，快捷键：`option` + `entry`
- 添加父组件、变为子组件、删除子组件：`option` + `entry`
- 万能的搜索：双击 `shift`
- 查看最近打开的文件：`command` + `E`
- 重命名： `fn` + `shift` + `F6`
- 查看当前类结构：`command` + `fn` + `F12`
- 查看源码：将光标放到要查看源码的类名或方法名上，长按 `command` ，然后点击
- 查看类的子类：选中要查看的类，然后：`command` + `B` 或 `option` + `command` + `B`
- 将代码更新到模拟器上：选中模拟器，然后 `command` + `R`
- 导入类：将光标放在要导入类的上面，然后 `option` + `entry`
- 前进后退：追踪代码的时候，经常跳转到其他类，后退：`option` + `command` + `left` ，前进快捷键：`option` + `command` + `right`
- 全局搜索：`command` + `shift` + `F`
- 全局替换：`command` + `shift` + `R`
- 查找引用：`option` + `shift` + `F7`

## 使用 Visual Studio Code 开发技巧

### VS Code 快捷键

- 快速创建 Widget：在 `Dart` 文件中输入 `stf` 或 `stl` 出现提示后按回车即可。
- 快速修复：`command` + `.`
- 自动生成构造函数：选中 `final` 参数，快捷键：`command` + `.`
- 添加父组件、变为子组件、删除子组件：`command` + `.`
- 重新打开 关闭的编辑页面：`command` + `shift` + `T`
- 通过匹配文本打开文件：`command` + `T`
- 代码格式化：`option` + `shift` + `F`
- 打开 console：`command` + `J`
- 查看源码：将光标放到要查看源码的类名或方法名上，长按 `command` ，然后点击
- 查看类的子类：选中要查看的类，然后：`command` + `F12`
- 后退：当追踪代码的时候，经常跳转到其他类，后退：`command` + `-`
- 导入类：将光标放在要导入类的上面，然后 `command` + `.`
- 全局搜索：`command` + `shift` + `F`
- 把当前行代码和上一行/下一行代码交换位置：`option` + `up` 或 `option` + `down`
- 快速复制当前行：`shift` + `option` + `down`

### 运行 Flutter 项目相关命令

```bash
# 运行当前连接设备
flutter run
# 运行指定设备
flutter run -d <device_id>
# 运行项目后
q # 终止运行
r # 热重载
command + k # 清空控制台
flutter clean # 清除缓存，可用于更改代码后运行异常的一种处理方式
flutter --version # 查看 Flutter 版本

```
