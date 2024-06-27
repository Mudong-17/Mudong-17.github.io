---
title: 使用FVM管理Flutter版本
description: 使用FVM管理Flutter版本，可以方便的切换不同的Flutter版本
categories: Note
date: 2024-06-26
tags: ["Flutter", "FVM"]
cover: https://qiniu.onion17.com/images/2024/06/26/04-38-45-6f61827dc31bea579799ee4961308bf7.png
author:
  name: 暮冬拾柒
  avatar: https://s2.loli.net/2024/06/26/hpinJ6Fb9UIZTCA.jpg
---

# 使用 FVM 管理 Flutter 版本

## 什么是 FVM

`FVM` 是一个为 `Flutter` 开发的版本管理工具，它允许你在同一台机器上安装和使用多个 `Flutter` 版本。`FVM` 提供了一种简单的方式来切换项目之间的 `Flutter` 版本，无需重新下载或配置。

## 为什么要使用 FVM

1. 版本隔离

允许每个项目维护独立的 `Flutter` 版本，避免不同项目间可能的版本冲突问题。不同项目可能依赖不同 `Flutter` 版本，版本隔离确保项目独立性，开发者可根据需要选择合适的 `Flutter` 版本开发和测试，无需担心版本不匹配问题。

2. 快速切换

简单命令即可在不同项目间快速切换 `Flutter` 版本，提供灵活性，使开发者轻松应对项目需求，无需手动管理不同版本的 `Flutter SDK` ，极大提高开发效率和便捷性。

3. 节省空间

允许共享相同版本的 Flutter SDK，并且只需下载一次即可在多个项目中使用，避免重复下载相同版本的 Flutter SDK，节省存储空间。特别适用于需要频繁切换 Flutter 版本或同时在多个项目中使用 Flutter 的开发者，可显著减少磁盘占用和下载时间。

## 安装 FVM

::: code-group

```bash [Homebrew]
brew install fvm
```

```shell [Chocolatey]
choco install fvm
```

```bash [Pub]
dart pub global activate fvm
```

:::

## 配置

- 环境变量配置
  安装 fvm 后，设置环境变量 FVM_HOME 或 FVM_GIT_CACHE

```bash
  echo 'export FVM_HOME=~/.fvm' >> ~/.zshrc
  echo 'export PATH=$FVM_HOME/default/bin:$PATH' >> ~/.zshrc
  echo 'export PUB_HOSTED_URL=https://pub.flutter-io.cn' >> ~/.zshrc
  echo 'export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn' >> ~/.zshrc

  source ~/.zshrc
```

## 命令

- `fvm releases` 查看所有可用的 Flutter 版本
- `fvm install <version>` 安装指定版本的 Flutter
- `fvm remove <version>` 删除指定版本的 Flutter
- `fvm use <version>` 在项目根目录使用指定版本的 Flutter
- `fvm list` 查看已安装的 Flutter 版本
- `fvm global <version>` 设置全局的 Flutter 版本
