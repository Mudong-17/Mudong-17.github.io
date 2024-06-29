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
next:
  text: "Dart 面向对象"
  link: "/Notes/Flutter/oop"
---

## 基础数据类型

::: code-group

```dart [数字类型]
void main() {
  // num 是数字类型的父类
  num num1 = -1.0;
  num num2 = 2;
  // 整型
  int age = 2;
  // 浮点型 双精度
  double weight = 4.5;

  // 求绝对值
  print(num1.abs());
  // 数值转换
  print(num1.toInt()); // 转换为int -> 1.0
  print(num2.toDouble()) // 转换为double -> 2.0
}
```

```dart [字符串]

void main() {
  String hello = "Hello, World!";
  int a = 1;

  String output = '$a 是一个整数';
  print(output) // -> 1 是一个整数

  String str1 = '字符串', str2 = "双引号";
  // 字符串拼接
  String srt3 = 'str1:$str1 srt2:$str2';
  String srt4 = 'srt1:' + str1 + ' str2' + str2;

  // 字符串常用方法
  // 字符串截取
  String str5 = '常用数据类型，请看控制台输出';
  print(str5.substring(1,5)) // 1 -> 开始位置，5 -> 结束位置不包含 ： 用数据类
  print(str5.indexOf('类型')) // 获取指定字符串位置 ： 4
}

```

```dart [布尔型]

void main() {
  bool flag = true;

  bool free = 0.9 < 1.1;

  bool success = true, fail = false;
}

```

```dart [List 集合]

void main() {
  // List 集合
  List list = [1, 2, 3, '集合'];
  // 指定范型
  List<int> list1 = [1, 2, 3, 4, 5];
  List<String> list2 = ['a', 'b', 'c', 'd', 'e'];

  // List 常用方法
  // 获取长度
  print(list.length); // 5
  // 获取指定位置元素
  print(list[0]); // 1
  // 添加元素
  list.add(6);
  // 添加多个元素
  list.addAll([7, 8, 9]);
  // 删除指定下标元素
  list.removeAt(0);
  // 删除指定范围元素 -> 从索引 0 开始删除 2 个元素
  list.removeRange(0, 2);
  // 删除指定元素
  list.remove(3);
  // 删除最后一个元素
  list.removeLast();
  // 删除所有元素
  list.clear();

  // 集合的生成函数
  List list4 = List.generate(5, (index) => index * 2); // [0, 2, 4, 6, 8]

  // 遍历集合的方式
  // for 循环
  for (int i = 0; i < list4.length; i++) {
    print(list4[i]);
  }
  // for in
  for(var o in list4) {
    print(o);
  }
  // forEach
  list4.forEach((element) {
    print(element);
  });
}

```

```dart [Map 集合]
// Map 是key-value 键值对集合, key 和 value 可以是任意类型, key 是唯一的, 如果 key 重复，后面的会覆盖前面的
void main() {
  Map profile = {
    'name': 'Tom',
    'age': 18,
  };
  // 添加元素
  profile['sex'] = '男';

  // Map 常用方法
  // 遍历
  profile.forEach((key, value) {
    print('$key: $value');
  });

  profile.map((key, value) {
    return MapEntry(key, value);
  });

  for (var key in profile.keys) {
    print(key);
    print(profile[key]);
    print('$key: ${profile[key]}');
  }
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
