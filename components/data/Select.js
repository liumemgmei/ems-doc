import React from 'react';
import {Select} from 'ems';
import withData from './withData';

function DataSelect(props) {
    const { name, autoSubmit, onSelect, setData,onSubmit, searchData, resetData, ...otherProps} = props;

    const _onSelect = async (value,option )=> {
        if (onSelect) {
            await onSelect(value,option);
        }
        let _searchData = await setData({[name]: value});
        if (autoSubmit) {
            onSubmit(_searchData);
        }
    };
    return (
        <Select
            onSelect={_onSelect}
            name={name}
            value={searchData[name]}
            {...otherProps}
        >
            {props.children}
        </Select>
    );
}

DataSelect.defaultProps = {
    autoSubmit: false
};

export default withData(DataSelect);