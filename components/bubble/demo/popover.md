---
order: 4
title:
  zh-CN: 自定义气泡弹框内的元素
  en-US: 自定义气泡弹框内的元素
---
## zh-CN

溢出隐藏出现的气泡可以自定义，使用Popover组件重写溢出展示的气泡弹框

## en-US

溢出隐藏出现的气泡可以自定义，使用Popover组件重写溢出展示的气泡弹框
````jsx
import {Button,Popover} from 'antd'; 
import { Bubble} from 'ems';

const divstyle = {
    width:'200px',
    border:'1px solid #ccc',
    lineHeight:'24px',
    padding:'0 5px',
    marginTop: '20px'
};

const listyle = {
    listStyleType:'disc',
    marginLeft:'10px'
}

class BubbleButton extends React.Component {

  render() {
    let str1 = '上海数据中心、南自园区综合功能、江苏移动idc储能';
    let str = '上海数据中心、南自';
    
    const Content = (props)=>{
        const {str} = props;
        let strarr = str.split('、');

        return (
            <ul>{
                strarr.map((elem)=>{
                    return (
                        <li key={elem} style={listyle}>
                            {elem}
                        </li>
                    )
                })
            }</ul>
        )
    }
    return (
        <React.Fragment>
            <div style={divstyle}>
                <Bubble>
                    <Popover content={<Content str={str}/>}>
                        {str}
                    </Popover>
                </Bubble>
            </div> 
            <div style={divstyle}>
                <Bubble>
                    <Popover content={<Content str={str1} />}
                    placement="topRight"
                    >
                        {str1}
                    </Popover>
                </Bubble>
            </div> 
        </React.Fragment>
    );
  }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
