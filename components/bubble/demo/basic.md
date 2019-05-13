---
order: 2
title:
  zh-CN: 文本溢出，自动增加气泡提示
  en-US: 文本溢出，自动增加气泡提示
---
## zh-CN

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

## en-US

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

````jsx
import {Button} from 'antd'; 
import { Bubble} from 'components';
const divstyle = {
    width:'200px',
    border:'1px solid #ccc',
    lineHeight:'24px',
    padding:'0 5px',
    marginTop: '20px'
};
class BubbleButton extends React.Component {


  render() {
    return (
        <React.Fragment>
            <div style={divstyle}>
                <Bubble>早上好！</Bubble>
            </div> 
            <div style={divstyle}>
                <Bubble>
                    你好啊，中午想吃什么啊，去吃酱爆茄子吧
                </Bubble>
            </div> 
        </React.Fragment>
    );
  }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
