---
order: 1
title:
  zh-CN: dataSource属性
  en-US: 基本功能
---
## zh-CN
通过dataSource来表示下拉框的数据。
标准格式:[{"name":"",value:""}]
        

## en-US


````jsx

import {Select} from 'ems';
import moment from 'moment';
class BubbleButton extends React.Component {
    onSelect = (value, option) =>{
        console.log(value, option);
    }
    render() {
        return (
            <React.Fragment>
                <div className="mint-green">
                    <Select
                        className="demo"
                        style={{marginLeft:'10px'}}
                        label="电池组："
                        labelStyle={{marginRight:'10px'}}
                        onSelect={this.onSelect}
                        dataSource={[{name:'电池一组',value:'1', order: 'T'}, {name:'电池二组',value:'2', order:'C'}]}
                    />
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
