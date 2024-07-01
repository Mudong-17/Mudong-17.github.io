---
title: Dart 面向对象
description: Dart 面向对象，标准构造方法、初始化列表、命名构造方法、工厂构造方法、get和set、静态方法、抽象类和方法、mixins
categories: Note
date: 2024-06-30
tags: ["Flutter", "Dart", "OOP"]
cover: https://qiniu.onion17.com/images/2024/06/29/13-51-03-f762c5a46736a7ceda97daf9639a5bdc.jpg
author:
  name: 暮冬拾柒
  avatar: https://s2.loli.net/2024/06/26/hpinJ6Fb9UIZTCA.jpg
prev:
  text: "Dart 基础语法"
  link: "/Notes/Flutter/dart"
---

## 封装、继承、多态

```dart
// 定义一个Dart类，所有的类都继承自Object
class Person {
  // 定义类的变量
  String name;
  int age;

  // 标准的构造方法
  Person(this.name, this.age);
  // 重写父类的方法
  @override
  String toString() {
    return 'name: $name, age: $age';
  }
}

class Student extends Person {
  // 下划线标识私有变量
  String _school;
  String city;
  String country;
  String name;

  // 初始化自身参数和父类参数

  // 构造方法：
  // 通过this._school初始化自由参数
  // name, age 交给父类进行初始化
  // {} 中的参数为可选参数
  // 可选参数可以设置默认值
  Student(this._school, String name, int age, { this.city, this.country = 'China' }) :
  // 初始化列表：除了调用父类构造器，在子类构造器方法体之前，也可以初始化实例变量，不同的初始化变量之间用逗号分隔
  name = '$country.$city',
  //如果父类没有默认构造方法（无参的构造方法）则需要在初始化列表中调用父类的构造方法进行初始化
  super(name, age) {
    // 构造方法 方法体 非必需
  }
  // 可以为私有字段设置getter来让外界获取到私有字段
  String get school => _school;
  // 可以为私有字段设置setter来控制外界对私有字段的修改
  set school(String value) {
    _school = value
  }

  // 静态方法
  // 使用 static 关键字来实现类级别的变量和方法,
  static doPrint(String str) {
    print('doPrint: $str');
  }

  // 命名构造方法：[类名.方法名]
  // 使用命名构造方法为类实现多个构造方法
  Student.cover(Student stu) : super(stu.name, stu.age) {
    print('命名构造方法')
  }

  // 命名工厂构造方法：factory [类名.方法名]
  // 他可以有返回值，而且不需要将类的 final 变量作为参数传入，是提供一种更灵活的方式来获取实例
  factory Student.stu(Student stu) {
    return Student(stu._school, stu.name, stu.age);
  }
}

class Logger {
  static Logger _cache;
  // 工厂构造方法
  // 工厂构造方法类似于设计模式中的工厂模式
  // 在构造方法前添加关键字factory实现一个工厂构造方法
  // 返回一个之前已经创建过的实例，原始的构造方法是无法实现这一点的
  factory Logger() {
    if (_cache == null) {
      _cache = Logger._internal();
    }
    return _cache;
  }

  void log(String msg) {
    print(msg);
  }
}



```

## 抽象类和方法

```dart
// 抽象类
// 使用 abstract 关键字来定义一个抽象类
// 抽象类在定义接口的时候非常有用，实际上抽象类是不能被实例化的，只能被继承
abstract class Study {
  void study();
}
// 继承抽象类
// 使用 extends 关键字来继承一个抽象类
// 一个类只能继承一个抽象类，而一个类可以实现多个接口
class studyFlutter extends Study {
  @override
  void study() {
    print('学习Flutter');
  }
}

```

## mixins

```dart
// mixins
// mixins 是在多个类层次结构中重用代码的一种方式
// 使用 with 关键字后面跟上一个或多个 mixin 的名字来实现
// mixins 的特征：
// 1. 作为 mixin 的类只能继承自 Object，不能继承其他类
// 2. 作为 mixin 的类不能有构造方法
// 3. 一个类可以 mixin 多个 mixin 类
// 4. mixin 类不能有超类
// 5. 使用关键字 with 进行混入
class A {
  String info = 'this is A';
  void printA() {
    print('A');
  }
}

class B {
  void printB() {
    print('B');
  }
}

class C with A, B {
}

```
