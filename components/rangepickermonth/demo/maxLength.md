---
order: 2
title:
  zh-CN: 月份选择的最大范围
  en-US: 
---
## zh-CN
月份选择的最大范围

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
        this.isLargeThanMax = this.isLargeThanMax.bind(this);
    }
    isLargeThanMax = function (startTime, endTime) {
        if( !startTime ){
            startTime = this.state.value[0];
            endTime = this.state.value[1];
        }
        let _startMonth = startTime.month();
        let _startYear = startTime.year();
        let _endMonth = endTime.month();
        let _endYear = endTime.year();
            _endMonth = _endMonth + (_endYear-_startYear)*12;
        if((_endMonth-_startMonth) > 12){
            return true;
        }
        return false;
    } 

    // disabledDate = () =>{

    // }

    onPanelChange = (value, mode)=> {
        const {key} = this.state;
        if(this.isLargeThanMax(value[0],value[1])){
            message.error('月份区间不能大于12个月')
            this.isOver = true;
            this.setState({
                isLargeThanMax:true
            })
        }
        else {
            this.isOver = false;
            this.setState({
                value:value,
                // key: key + 1,
                isLargeThanMax:false
            });
        }

    }
    
    render() {
        const {value, isLargeThanMax, key} = this.state;
        return (
            <div>
                <RangePickerMonth
                    value={value}
                    onPanelChange={this.onPanelChange}
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
