---
category: Components
type: 数据录入
title: DateTimePicker
cols: 1
subtitle: 日期时刻选择
---

带小时和分钟的日期选择器

## 何时使用
时间选择同时包含 日期小时分钟这三项

## API


属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | demo |
| --- | --- | ------ | --- |
| defaultValue | 默认时间值 | moment |  | moment('2019-01-02 12:12')
| value | 时间值 | moment类型或者 null |  |
| onChange | 时间变化之后的回调值 | function (moment, datetimeString, open) |  $.noop| |
| label | label | string |  |  |
| className | 样式名称 | string |  |  |
| style | 内联样式 | object |  |  |



