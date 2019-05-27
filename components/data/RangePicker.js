/**
 * name 属性是个数组
 * 默认值是moment
 * 传出的值也是moment
 */
import React from 'react';
import {RangePicker} from 'ems';
import withData from './withData';

class DataRangePicker extends React.Component {
    constructor(props){
        super(props);
    }
    _onChange = async (dates) => {
        const {name, autoSubmit, onChange, setData, onSubmit, searchData, resetData, ...otherProps} = this.props;
        let value = {[name[0]]: dates[0], [name[1]]: dates[1]};
        if (onChange) {
            await onChange(value);
        }
        let _searchData = await setData(value);
        if (autoSubmit) {
            onSubmit({..._searchData});
        }
    };
    render(){
        const {name, autoSubmit, onChange, setData, onSubmit, searchData, resetData, ...otherProps} = this.props;
        let _value = null;
        if (searchData[name[0]]) {
            _value = [searchData[name[0]],searchData[name[1]]];
        }
    
        return (
            <RangePicker
                allowClear = {false}
                onChange={this._onChange}
                value={_value}
                {...otherProps}
            />
        );
    }
    
}

DataRangePicker.defaultProps = {
    autoSubmit: false
};

export default withData(DataRangePicker);