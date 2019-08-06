---
order: 0
title:
  zh-CN: 文本溢出出现title
  en-US: get container size
---

## zh-CN
在组件开始渲染的时候就能获取容器dom

## en-US

Classic mode. File selection dialog pops up when upload button is clicked.

```jsx
import {useState} from 'react';
import {  Button,Popover } from 'antd';
import { Bubble } from 'ems';

const Content =(props)=>{
  const {str} = props;
  let strarr= str.split('、');
  return (
    <ul>
    {
      strarr.map((item,key)=>{
        return (<li key={key}>{item}</li>);
      })
    }
    </ul>
  )
}
function App() {
  const [text,setText] = useState('你好你好呢你好你好呢你好你好呢你好你好呢你好你好呢你好你好呢');
  const [str,setStr] = useState('南自、上海');
  const [width, setWidth] = useState(100);

  return (
    <div>
      <div style={{width: width + 'px', height: '100px',border: '1px solid #ccc'}}><Bubble placement="bottom">{text}</Bubble></div>
      <div style={{width: '100px'}}><Bubble><Popover content={<Content str={str}/>}>{str}</Popover></Bubble></div>
      <Button className="e-ml10" onClick={()=>{setText('你好你好呢')}}>短文本</Button>
      <Button className="e-ml10" onClick={()=>{setText('你好你好呢你好你好呢你好你好呢你好你好呢你好你好呢你好你好呢')}}>长文本</Button>
      <Button className="e-ml10" onClick={()=>{setWidth(600)}}>宽度设置为600</Button>
      <Button className="e-ml10" onClick={()=>{setWidth(200)}}>宽度设置为200</Button>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  mountNode,
);
```
<style>
.e-ml10{
  margin-left:10px;
}
</style>
