import React from 'react';
import withData from './withData';
import {RangePickerMonth} from 'ems';
import {message} from 'antd';

class DataRangePickerMonth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLargeThanMax: false,
            key: 0

        };
        //应该根据初始值来确定
        this.isOver = false;

        this.isLargeThanMax = this.isLargeThanMax.bind(this);
    }
    isLargeThanMax = function (startTime, endTime) {
        if ( !startTime ) {
            startTime = this.state.value[0];
            endTime = this.state.value[1];
        }
        let _startMonth = startTime.month();
        let _startYear = startTime.year();
        let _endMonth = endTime.month();
        let _endYear = endTime.year();
            _endMonth = _endMonth + (_endYear - _startYear) * 12;
        if ((_endMonth - _startMonth) > this.props.maxLength) {
            return true;
        }
        return false;
    }
    _onChange = async (datetime, datetimeString, open)=> {
        const {onChange, setData, autoSubmit, onSubmit, name} = this.props;
        if (onChange) {
            // if (!open) {
                await onChange(datetime, datetimeString, open);
            // }
        }
        let _searchData = await setData({[name]: datetime});
        if (autoSubmit) {
            onSubmit({..._searchData});
        }
    };
    _onPanelChange = async (value, mode)=> {
        const {onPanelChange, setData, autoSubmit, onSubmit, name} = this.props;
        const {key} = this.state;
        if (this.isLargeThanMax(value[0],value[1])) {
            message.error('月份区间不能大于12个月');
            this.isOver = true;
            this.setState({
                isLargeThanMax: true
            });
        }
        else {
            this.isOver = false;
            this.setState({
                key: key + 1,
                isLargeThanMax: false
            });
            if (onPanelChange) {
                // if (!open) {
                    await onPanelChange(value);
                // }
            }
            let _searchData = await setData({[name[0]]: value[0],[name[1]]: value[1]});
            if (autoSubmit) {
                onSubmit({..._searchData});
            }
        }
    }
    render() {
        const {setData, onSubmit, searchData, resetData, onChange, name, autoSubmit, onPanelChange, ...otherProps} = this.props;
        return (
            <RangePickerMonth
                value={[searchData[name[0]],searchData[name[1]]]}
                onChange={this._onChange}
                onPanelChange={this._onPanelChange}
                isOver={this.isOver}
                key={this.state.key}
                {...otherProps}
            />
        );
    }
}
DataRangePickerMonth.defaultProps = {
    maxLength: ''
};
export default withData(DataRangePickerMonth);