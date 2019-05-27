---
order: 1
title:
  zh-CN: 基本功能
  en-US: 基本功能
---
## zh-CN

基本使用 

## en-US

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

````jsx

import { DateTimePicker} from 'ems';
import moment from 'moment';
class BubbleButton extends React.Component {

    showChange = (value, dateTimeString, open) => {
        !open && console.log(value, dateTimeString);
    }
    render() {
        return (
            <React.Fragment>
                <div >
                        <DateTimePicker
                            onChange={this.showChange}
                        />
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
