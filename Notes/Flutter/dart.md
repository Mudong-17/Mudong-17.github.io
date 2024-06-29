---
title: Dart 基础语法
description: 最最基础的Dart语法，包括变量、数据类型、运算符、流程控制等
categories: Note
date: 2024-06-29
tags: ["Flutter", "Dart"]
cover: https://qiniu.onion17.com/images/2024/06/29/13-51-03-f762c5a46736a7ceda97daf9639a5bdc.jpg
author:
  name: 暮冬拾柒
  avatar: https://s2.loli.net/2024/06/26/hpinJ6Fb9UIZTCA.jpg
prev:
  text: "编辑器开发 Flutter 实用技巧"
  link: "/Notes/Flutter/ide"
---

## 基础数据类型

::: code-group

```dart [数字类型]
void main() {
  // 整型
  int age = 2;
  // 浮点型
  double weight = 4.5;
}
```

```dart [字符串]

void main() {
  String hello = "Hello, World!";
  int a = 1;

  String output = '$a 是一个整数';
  print(output) // -> 1 是一个整数
}

```

```dart [布尔型]

void main() {
  bool flag = true;

  bool free = 0.9 < 1.1;
}

```

:::

## 运算符

### 算术运算符

- `+`：加
- `-`：减
- `*`：乘
- `/`：除
- `%`：余
- `～/`：商

### 比较运算符

- `>`: 大于
- `<`: 小于
- `==`: 等于
- `!=`: 不等
- `>=`: 大于等于
- `<=`: 小于等于

### 逻辑运算符

- `&&`: 与
- `||`: 或
- `!`: 非

## 流程控制

### 条件

- if - else
- switch - case

### 循环

- for
- while
- do - while

### 中断

- break
- continue

## 函数

`Dart` 是一种真正的面向对象语言，因此即使函数也是对象，并且具有类型 `Function`。这意味着函数可以分配给变量或作为参数传递给其他函数。

> 身体质量指数，是 BMI（Body Mass Index）指数，简称体质指数，是国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。通过身高和体重可以通过计算公式：`BMI=体重+身高^2`计算出体质指数

```dart
double calculateBmi(double height, double wight) {
  double bmi = wight / (height * height);
  return bmi;
}

void main() {
  double Tom = calculateBmi(1.75, 70);
  print('Tom 的 BMI 是 $Tom');
}
```

### 命名参数

Dart 中支持命名参数，可以通过参数的名称来传参，不需要在意入参的顺序。通过 {} 包裹命名的参数，其中 required 关键字表示该入参必须传入; 另外，可以用 = 提供参数的默认值，使用者在调用时可以选填

```dart
void printUserInfo({required String name, int age = 18,}) {
  print('name: $name, age: $age');
}

void main() {
  printUserInfo(age: 20, name: 'Tom', );
  printUserInfo(name: 'Jerry');
}
```

### 位置参数

使用`[]`包裹的参数是位置参数，位置参数必须按照函数定义的顺序传入，否则会报错，但是可以使用`=`提供默认值

```dart
void printUserInfo([String name, int age = 18,]) {
  print('name: $name, age: $age');
}

void main() {
  printUserInfo('Tom', 20);
  printUserInfo('Jerry');
}
```
