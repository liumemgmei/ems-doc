
import React from 'react';
import {Select} from 'antd';
import shouldComponentUpdate from 'shouldComponentUpdate';
import './style/index.less';
 const Option = Select.Option;

class SelectWanke extends React.Component {
    constructor(props) {
        super(props);
        // this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    render() {
        // console.log(this.props.name);
        const {className, style, label, labelStyle, dataSource, ...otherProps} = this.props;
        const _className = 'z_selection line ' + (className ? className : '');
        return (
            <span
                className={_className}
                style={style}
            >
            {label && <span style={labelStyle}>{label}</span>}
            <Select
                {...otherProps}
                placeholder="请选择"
                style={{width: '210px'}}
            >{
                dataSource ? (
                    dataSource.map((item)=>{
                        const { name, value, ...otherItem} = item;
                        let temp = {};
                        for (var i in otherItem) {
                            temp[i.toLowerCase()] = otherItem[i];
                        }
                        return (
                        <Option
                            value={item.value}
                            key={item.value}
                            name={item.name}
                            {...temp}
                        >
                            {item.name}
                        </Option>);
                    })
                ) : (
                    this.props.children
                )
            }</Select>
        </span>
        );
    }
}
export default SelectWanke;