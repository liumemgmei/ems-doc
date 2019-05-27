import React from 'react';
import withData from './withData';
import {DateTimePicker} from 'ems';

class DataDatetimepicker extends React.Component {
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
    render() {
        const {setData, onSubmit, searchData, resetData, onChange, name, autoSubmit, ...otherProps} = this.props;
        return (
            <DateTimePicker
                value={searchData[name]}
                onChange={this._onChange}
                {...otherProps}
            />
        );
    }
}
DataDatetimepicker.defaultProps = {
    autoSubmit: false
};
export default withData(DataDatetimepicker);