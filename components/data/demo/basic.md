---
order: 1
title:
  zh-CN: 基本功能
  en-US: 基本功能
---
## zh-CN

基本使用, 点击查询之后可以看到打印的查询条件信息 

## en-US



````jsx

import moment from 'moment';
import React from 'react';
import {  Data} from 'ems';
import _ from 'lodash'
console.log(Data)
let socketClient;

class LinkSocket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '点击链接',
      result: '暂无数据'
    };
  }

  submit = (_data) => {
      let data = _.clone(_data);
      data.startMonth = data.startMonth.format('YYYY-MM');
      data.endMonth = data.endMonth.format('YYYY-MM');
      data.startDate = data.startDate.format('YYYY-MM-DD');
      data.endDate = data.endDate.format('YYYY-MM-DD');
      data.startTime = data.startTime.format('YYYY-MM-DD HH:mm');
      data.endTime = data.endTime.format('YYYY-MM-DD HH:mm');
        console.log(data)
  }
  onBeforeSubmit = (data) => {
    if (data.endTime.isBefore(data.startTime)) {
        return '结束时间不能小于开始时间';
    }
    return '';
  }
  render() {
    return (
      <div className="mint-green">
            <Data.Central
                defaultValue={{
                    energy: 'no2' , 
                    startTime: moment('2019-05-22 12:12', 'YYYY-MM-DD hh:mm') ,
                    endTime: moment('2019-05-23 20:12', 'YYYY-MM-DD hh:mm'),
                    startMonth:moment('2019-05-22 12:12', 'YYYY-MM-DD hh:mm'),
                    endMonth:moment('2019-06-22 12:12', 'YYYY-MM-DD hh:mm'),
                    startDate:moment('2019-06-22', 'YYYY-MM-DD'),
                    endDate:moment('2019-06-22', 'YYYY-MM-DD')
                    }
                }
                onBeforeSubmit={this.onBeforeSubmit}
                onSubmit={this.submit}
                autoSubmit={false}
            >
                <Data.DateTimePicker label="开始时间: " className="e-ml20" name="startTime"/>
                <Data.DateTimePicker label="结束时间: " className="e-ml20" name="endTime"/>
                <Data.RangePickerMonth maxLength={12} name={['startMonth','endMonth']}/>
                <Data.RangePicker maxLength={3} name={['startDate','endDate']}/>
                <Data.Select dataSource={[{name: '电池一组',value: 'no1'}, {name: '电池二组', value: 'no2'}]} lable="电池组" className="e-ml20" name="energy"/>
                <Data.Button autoSubmit={true} className="e-ml20">查询</Data.Button>
            </Data.Central>
            <div className="f-tac e-mt20">{this.state.result}</div>
      </div>
    );
  }
}


ReactDOM.render(<LinkSocket />, mountNode);
````
