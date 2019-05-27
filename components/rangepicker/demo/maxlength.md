---
order: 2
title:
  zh-CN: 日期最大选择范围
  en-US: 
---
## zh-CN





## en-US


````jsx
import { RangePicker } from 'ems';
import {DatePicker} from 'antd';
const MonthPicker = DatePicker.MonthPicker;
import 'antd/dist/antd.css';


class ControlledRangePicker extends React.Component {

    render() {
        return (
            <div>
            <RangePicker
                maxLength={2}
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
