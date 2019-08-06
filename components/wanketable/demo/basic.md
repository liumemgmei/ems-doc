---
order: 0
title:
  zh-CN: 万克表格
  en-US: get container size
---

## zh-CN
表格内容溢出隐藏

## en-US

Classic mode. File selection dialog pops up when upload button is clicked.

```jsx
import React,{useState,useEffect,useLayoutEffect} from 'react';
import { Popover} from 'antd';
import { WankeTable} from 'ems';
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
    name: "胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111",
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
    name: "胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111",
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
    name: "胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111",
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
    name: "胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111",
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
    name: "胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111",
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
    name: "胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111",
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
    name: "胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111",
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
    name: "胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111胡彦斌2222211111",
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
    width:220,
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

ReactDOM.render(
  <div style={{height: '500px', border:'1px solid green'}}>
  <App />
  </div>
  ,
  mountNode
);
```
<style>
.code-box-demo .con {
  border: 1px solid blue;
}
.code-box-demo table {
  table-layout:fixed;
}
</style>
