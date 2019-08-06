---
order: 1
title:
  zh-CN: 表格应用
  en-US: get container size
---

## zh-CN
表格组件内部已经使用了withcon

## en-US

Classic mode. File selection dialog pops up when upload button is clicked.

```jsx
import React,{useState,useEffect,useLayoutEffect} from 'react';
import { Popover, Button} from 'antd';
import { withCon,WankeTable } from 'ems';

const listyle = {
  listStyleType: "disc",
  marginLeft: "10px"
};
const Content = function(props) {
  const {str} = props;
  let strarr = str.split("、");
  return (
    <ul>
      {strarr.map(elem => {
        return (
          <li key={elem} style={listyle}>
            {elem}
          </li> 
        );
      })}
    </ul>
  );
};
const dataSource =[
  {
    key: "1",
    name: "胡彦斌222",
    age: "2",
    age1: "2",
    age2: "2",
    age3: "2",
    age4: "2",
    age5: "2",
    age6: "2",
    address: "中心"
  },
  {
    key: "2",
    name: "胡彦斌222",
    age: "2",
    age1: "2",
    age2: "2",
    age3: "2",
    age4: "2",
    age5: "2",
    age6: "2",
    address: "中心"
  },
  {
    key: "3",
    name: "胡彦斌222",
    age: "2",
    age1: "2",
    age2: "2",
    age3: "2",
    age4: "2",
    age5: "2",
    age6: "2",
    address: "中心"
  },
  {
    key: "4",
    name: "胡彦斌222",
    age: "2",
    age1: "2",
    age2: "2",
    age3: "2",
    age4: "2",
    age5: "2",
    age6: "2",
    address: "中心"
  },
  {
    key: "5",
    name: "胡彦斌222",
    age: "2",
    age1: "2",
    age2: "2",
    age3: "2",
    age4: "2",
    age5: "2",
    age6: "2",
    address: "中心"
  },
  {
    key: "6",
    name: "胡彦斌222",
    age: "2",
    age1: "2",
    age2: "2",
    age3: "2",
    age4: "2",
    age5: "2",
    age6: "2",
    address: "中心"
  },
  {
    key: "7",
    name: "胡彦斌222",
    age: "2",
    age1: "2",
    age2: "2",
    age3: "2",
    age4: "2",
    age5: "2",
    age6: "2",
    address: "中心"
  },
  {
    key: "8",
    name: "胡彦斌222",
    age: "2",
    age1: "2",
    age2: "2",
    age3: "2",
    age4: "2",
    age5: "2",
    age6: "2",
    address: "中心"
  }
];
let columns = [
  {
    title: "名称",
    width: 80,
    dataIndex: "name",
    key: "name",
    placement: "topLeft",
  },
  {
    title: "名称",
    dataIndex: "age1",
    width: 80,
    render: text => {
      return <a>{text}</a>;
    }
  },
  {
    title: "名称",
    dataIndex: "age2",
    width: 80,

    render: text => {
      return <a>{text}</a>;
    }
  },
  {
    title: "名称",
    dataIndex: "age3",
    width: 80,

    render: text => {
      return <a>{text}</a>;
    }
  },
  {
    title: "名称",
    dataIndex: "age4",
    width: 80,
    render: text => {
      return <a>{text}</a>;
    }
  },
  {
    title: "名称",
    dataIndex: "age5",
    width: 80,

    render: text => {
      return <a>{text}</a>;
    }
  },
  {
    title: "操作",
    dataIndex: "action",
    width: 80
  }
];
function App(props) {
  return (
    <WankeTable
      dataSource={dataSource}
      columns={columns}
      popover
    />
  );
}
function Demo() {
  const [style, setStyle] =useState({width: 100,height:300});
  const [times, setTimes] = useState(0); 
  return (
    <React.Fragment>
      <Button onClick={()=>{
        setStyle({width: parseInt(Math.random()*890), height:parseInt(Math.random()*1000)})
      }}>改变左边盒子大小</Button>

      <div style={{display:'flex',width:'890px',height:'500px',border:'1px solid red'}}>
        <div style={{width: '455px', flexShrink:0, border: '2px solid green'}}></div>
        <div className="con" style={{flexGrow:1,overflow:'auto'}}>
          <App />
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
