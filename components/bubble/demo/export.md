---
order: 3
title:
  zh-CN: 文本内容为链接
  en-US: 文本内容为链接
---
## zh-CN
文本内容可以是a链接，并且气泡展示完整的链接内容


## en-US
文本内容可以是a链接，并且气泡展示完整的链接内容

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
                <Bubble>
                    <a href="http://ems.wankeauto.com/#/home_general" target="_blank">
                        2018 万克能源科技有限公司 All Rights Reserved
                    </a>
                </Bubble>
            </div> 
        </React.Fragment>
    );
  }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
