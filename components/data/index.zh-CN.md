---
category: Components
type: 数据录入
title: Data
cols: 1
subtitle: 数据管理
---

管理数据

## 何时使用
当有很多查询条件的时候

## API



Data.Central属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 
| --- | --- | ------ | --- |
| defaultValue |默认值 | moment |  | 
| onSubmit | 提交参数时候的执行函数 | moment |  | 
| autoSubmit | 装载完组件，要不要立即执行onSubmit | moment |  | 
| onBeforeSubmit | onSubmit提交前执行的函数，如果返回值不为空，则页面提示信息，不进行继续查询 |  |  | 
| onSubmit | 提交参数执行的函数 |  |  | 

 Data.Select属性说明如下:

| 属性 | 说明 | 类型 | 默认值 | 
| --- | --- | ------ | --- |
| name |必填 | string |  | 
| autoSubmit | 下拉选择之后，要不要立即执行onSubmit |  |  | 

 Data.RangePickerMonth属性说明如下:

| 属性 | 说明 | 类型 | 默认值 | 
| --- | --- | ------ | --- |
| name |必填 | string |  | 
| autoSubmit | 下拉选择之后，要不要立即执行onSubmit |  |  | 
| onPanelChange | 面板数据变化之后的回调函数 |function  |  | 

<style>
.e-ml20 {
    margin-left:20px;
}
</style>


