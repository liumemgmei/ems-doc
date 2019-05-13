---
order: 2
title:
  zh-CN: 气泡提示的位置
  en-US: 气泡提示的位置
---
## zh-CN

可以自定义气泡提示的位置，方位有12个 种类和popover的placement一致



## en-US

可以自定义气泡提示的位置，方位有12个 种类和popover的placement一致

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
                <Bubble placement="bottom">
                    你好啊，中午想吃什么啊，去吃酱爆茄子吧
                </Bubble>
            </div> 
        </React.Fragment>
    );
  }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
