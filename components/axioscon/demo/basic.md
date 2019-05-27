---
order: 1
title:
  zh-CN: 基本功能
  en-US: 基本功能
---
## zh-CN



## en-US

文本内容如果超出父容器的宽度，则溢出隐藏出现并且出现省略号，并在鼠标悬浮的时候，展示完整的内容

````jsx
import {Button} from 'ems'; 
import { axiosCon} from 'ems';

class Con extends React.Component {
    componentDidMount() {

    }
    axios = ()=>{
        this.props.axios('get','/ems/enums/energyUnit/byStationCode/false')
        .then((res)=>{
             
        })
    }

    render() {
        return (
            <div style={{height:'100%'}}>
            <Button onClick={this.axios}>点击请求数据</Button>

            </div>
        );
    }
}

const Com = axiosCon(Con)

ReactDOM.render(<div style={{width:'500px',height:'500px',border:'1px solid #ccc',position:'relative'}}><Com /></div>, mountNode);
````
