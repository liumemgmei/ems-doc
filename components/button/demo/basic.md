---
order: 1
title:
  zh-CN: 皮肤功能
  en-US: 基本功能
---
## zh-CN

基本皮肤样式

## en-US

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

````jsx

import { Button} from 'ems';

class BubbleButton extends React.Component {
  

  render() {
    return (
        <React.Fragment>
               <div className='mint-green' style={{padding:'20px'}}> <Button >薄荷绿</Button></div>
               <div className='space-gray' style={{padding:'20px'}}> <Button >深空灰</Button></div>
               <div className='slate-blue' style={{padding:'20px'}}> <Button >石板蓝</Button></div>
        </React.Fragment>
    );
  }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
