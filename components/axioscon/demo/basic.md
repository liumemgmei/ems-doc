---
order: 2
title:
  zh-CN: 基本功能
  en-US: 基本功能
---
## zh-CN

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

## en-US

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

````jsx
import {Button} from 'antd'; 
import { axiosCon} from 'components';

class Con extends React.Component {
    componentDidMount() {

    }
    axios = ()=>{
        this.props.axios('get','/ems/enums/energyUnit/byStationCode/false')
        .then((res)=>{
                    console.log('haha1');

            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log('haha');
                    resolve();
                },10000);
            })
        })
    }

    render() {
        return (
            <div>
            <Button onClick={this.axios}>点击请求数据</Button>
            </div>
        );
    }
}

const Com = axiosCon(Con)

ReactDOM.render(<div style={{width:'200px',height:'100px',border:'1px solid #ccc'}}><Com /></div>, mountNode);
````
