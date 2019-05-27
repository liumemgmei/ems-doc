import * as React from 'react';
import DataContext from './context';
import PropTypes from 'prop-types';
import Select from './Select';
import RangePicker from './RangePicker';
import TableSub from './TableSub';
import Table from './Table';
import Button from './Button';
import DateTimePicker from './DateTimePicker';
import RangePickerMonth from './RangePickerMonth';
import {message} from 'antd';

class Central extends React.Component {
    constructor(props) {
        super(props);
        this.defaultValue = props.defaultValue;
        this.state = {
            ...props.defaultValue
        };
        this._onSubmit = this._onSubmit.bind(this);
        this.setData = this.setData.bind(this);
        this.resetData = this.resetData.bind(this);
    }

    componentDidMount() {
        const {autoSubmit} = this.props;
        if (autoSubmit) {
            this._onSubmit(this.state);
        }
    }

    _onSubmit = function () {
        const {onSubmit, onBeforeSubmit} = this.props;
        let msg = onBeforeSubmit(this.state);
        if (!msg) {
            onSubmit(this.state);
        }
        else {
            message.error(msg);
        }
    }
    setData(data) {
        return new Promise((resolve)=>{
            this.setState(data, ()=>{
                resolve(this.state);
            });
        });
    }

    resetData() {
        return this.setData(this.defaultValue);
    }
    render() {
        const contextData = {
            searchData: this.state,
            onSubmit: this._onSubmit,
            setData: this.setData,
            resetData: this.resetData
        };

        return (
            <DataContext.Provider value={contextData} >
                {this.props.children ? this.props.children : <div></div>}
            </DataContext.Provider>
         );
    }
}

Central.propTypes = {
    defaultValue: PropTypes.object,
    onSubmit: PropTypes.func
};

Central.defaultProps = {
    onBeforeSubmit: () => {
        return '';
    },
    onSubmit: ()=>{},
    autoSubmit: false
};

export default {Central, Select, TableSub, RangePicker, Table, Button, DateTimePicker, RangePickerMonth};
