---
order: 1
title:
  zh-CN: 月份区间选择
  en-US: 月份区间选择
---
## zh-CN
继承自antd的rangpicker的月份模式，增加了选择第二个月份时候关闭；

## en-US

可以自定义气泡提示的位置，方位有12个 种类和popover的placement一致

````jsx
import { RangePickerMonth } from 'ems';
import {DatePicker, message} from 'antd';
const MonthPicker = DatePicker.MonthPicker;
import 'antd/dist/antd.css';


class ControlledRangePicker extends React.Component {

    constructor(props){
        super(props);
        this.state={
            value:[null, null],
            isLargeThanMax:false,
            maxLength: 12,
            key:0

        }
        this.isOver = false;
    }

    onPanelChange = (value, mode)=> {
        const {key} = this.state;
        this.isOver = false;
        this.setState({
            value:value,
            // key: key + 1,
        });
    }
    
    
    render() {
        const {value, isLargeThanMax, key} = this.state;
        return (
            <div>
                <RangePickerMonth
                    value={value}
                    onPanelChange={this.onPanelChange}
                    onChange={this.onChange}
                    isOver={this.isOver}
                />
            </div>
        );
    }
}

ReactDOM.render(
  <div>
    <ControlledRangePicker
    />
  </div>,
  mountNode,
);
````
