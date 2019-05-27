---
order: 4
title:
  zh-CN: 设置label
  en-US: 基本功能
---
## zh-CN

带默认值的时间选择器
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
                        className="demo"
                        defaultValue={moment('2019-05-22 12:53', 'YYYY-MM-DD HH:mm')}
                        onChange={this.showChange}
                        label="开始时间："
                    />
                    <DateTimePicker
                        className="demo"
                        style={{marginLeft:'10px'}}
                        defaultValue={moment('2019-05-22 12:53', 'YYYY-MM-DD HH:mm')}
                        onChange={this.showChange}
                        label="结束时间："
                    />
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
