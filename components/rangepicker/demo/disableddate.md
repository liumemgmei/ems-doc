---
order: 1
title:
  zh-CN: 设置不可选的日期
  en-US: 基本功能
---
## zh-CN
disabledDate：
 *  isBeforeToday: 今天之前的都置灰
 *  isAfterToday 今天之后的都置灰
 *  isSameOrAfterToday 今天之后包括今天 的都置灰
 *  isSameOrBeforeToday 今天之前包括今天 的都置灰
        

## en-US

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

````jsx

import {RangePicker} from 'ems';
import moment from 'moment';
class BubbleButton extends React.Component {

    showChange = (value, dateTimeString, open) => {
       !open && console.log(value, dateTimeString);
    }
    render() {
        return (
            <React.Fragment>
                <div >
                    <RangePicker
                        className="demo"
                        style={{marginLeft:'10px'}}
                        defaultValue={moment('2019-05-24 12:53', 'YYYY-MM-DD')}
                        onChange={this.showChange}
                        disabledDate="isBeforeToday"
                        label="今天之前的都置灰："
                    /><br/>
                    <RangePicker
                        className="demo"
                        style={{marginLeft:'10px'}}
                        defaultValue={moment('2019-05-24 12:53', 'YYYY-MM-DD')}
                        disabledDate="isAfterToday"
                        onChange={this.showChange}
                        label="今天之后的都置灰："
                    /><br/>
                    <RangePicker
                        className="demo"
                        style={{marginLeft:'10px'}}
                        defaultValue={moment('2019-05-23 12:53', 'YYYY-MM-DD')}
                        disabledDate="isSameOrAfterToday"
                        onChange={this.showChange}
                        label="今天之后包括今天："
                    /><br/>
                    <RangePicker
                        className="demo"
                        style={{marginLeft:'10px'}}
                        defaultValue={moment('2019-05-25 12:53', 'YYYY-MM-DD')}
                        disabledDate="isSameOrBeforeToday"
                        onChange={this.showChange}
                        label="今天之前包括今天："
                    /><br/>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
