---
order: 0
title:
  zh-CN: 组件内部获取容器宽高
  en-US: get container size
---

## zh-CN
获取组件父元素的宽度高度

## en-US

Classic mode. File selection dialog pops up when upload button is clicked.

```jsx
import React,{useState,useEffect,useLayoutEffect} from 'react';
import {  Button} from 'antd';
import { withCon } from 'ems';

function App(props) {
  return (
    <span>容器的宽高分别是{props.width}, {props.height}</span>
  );
}


let D = withCon(App);
function Demo() {
  const [style, setStyle] =useState({width: 100,height:300});
  return (
    <React.Fragment>
      <Button onClick={()=>{
        setStyle({width: parseInt(Math.random()*890), height:parseInt(Math.random()*1000)})
      }}>改变左边盒子大小</Button>
      <div style={{display:'flex',width:'890px',height:'500px',border:'1px solid red'}}>
        <div style={{width: style.width, flexShrink:0,border: '2px solid green'}}></div>
        <div className="con" style={{flexGrow:1}}>
          <D />
        </div>
      </div>
    </React.Fragment>
  );
}
ReactDOM.render(
  <Demo />,
  mountNode
);
```
<style>
.code-box-demo .con {
  border: 1px solid blue;
}
</style>
