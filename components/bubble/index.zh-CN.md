---
category: Components
type: 通用
title: Bubble
subtitle: 溢出展示气泡
---

容器内文本如果出现了省略号，则自动增加气泡提示的功能

## 何时使用

块级元素宽高固定，约定内容不允许换行，如果文本过长，采用省略号的形式，并且鼠标悬浮气泡显示.

## API

表格内部已使用Bubble组件，来实现表格中列内容过长，不换行，隐藏内容鼠标悬浮展示的功能。

属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placement | 气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom | string | top |


<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
