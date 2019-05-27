---
order: 3
title:
  zh-CN: 设置value
  en-US: 基本功能
---
## zh-CN

使用value控制值得时间选择器
## en-US

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

````jsx

import { DateTimePicker} from 'ems';
import {Button} from 'antd';
import moment from 'moment';
class BubbleButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        };
    }

    componentDidMount(){
    }

    showChange = (value, dateTimeString, open) => {
        !open && console.log(value, dateTimeString)
        this.setState({
            value: value
        })
    }

    clear =() => {
        this.setState({
            value: null
        })
    }
    setLove = () => {
        this.setState({
            value:moment('2019-05-20 13:14', 'YYYY-MM-DD HH:mm')
        })
    }
    render() {
        const {value} = this.state;
        return (
            <React.Fragment>
                <div>
                    <DateTimePicker
                        value = {value}
                        onChange={this.showChange}
                    />
                    
                </div>
                <div>
                    <Button onClick={this.clear} style={{marginTop:'10px'}}>清空</Button>
                    <Button onClick={this.setLove} style={{marginTop:'10px',marginLeft:'10px'}}>2019-05-20 13:14</Button>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<BubbleButton />, mountNode);
````
