/**
 * 提供基本的样式（分3个皮肤）
 * 鼠标悬浮气泡提示
 */
import * as React from 'react';
var _reactDom = require('react-dom');

import shouldComponentUpdate from 'shouldComponentUpdate';
import {DatePicker, TimePicker, Button,Icon} from 'antd';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import contains from 'rc-util/lib/Dom/contains';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './style/index.less';
import moment from 'moment';

//既可以是受控组件也可以是非受控组件
//标识符号 changeDateReady：是否已经选择过日期 changeCloseReady：是否即将关闭面板 isControl：是否是受控组件
//临时存储
//驱动视图
class DateTimePicker extends React.Component {
    constructor(props) {
        super(props);
        let datetime;
        this.state = {
            popupVisible: false,
            value: this.props.defaultValue
        };
        // this.changeDateReady = false;
        this.isControl = (typeof this.props.value !== 'undefined') ? true : false;
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
        this.link = React.createRef();
        this.timespan = React.createRef();
    }
    componentDidMount() {
        this.componentDidUpdate(null, {
            popupVisible: this.state.popupVisible
          });
    }
    componentDidUpdate(prevProps, prevState) {
        const _this = this;
        if (_this.state.popupVisible) {
            if (!_this.clickOutsideHandler) {
              _this.clickOutsideHandler = addEventListener(document, 'mousedown', _this.onDocumentClick);
              _this.touchOutsideHandler = addEventListener(document, 'touchstart', _this.onDocumentClick);
            }
        }
          //值变化之后的回调函数
        if (prevProps !== null && this.isControl && prevState.popupVisible === false) {
            if (this.props.value === null) {
                this.props.onChange(null, '', this.state.popupVisible);
            }
            else {
                this.props.onChange(this.props.value, this.props.value.format(this.props.format), this.state.popupVisible);
            }
        }
    }
    componentWillUnmount() {
        const _this = this;
        if (_this.clickOutsideHandler) {
            _this.clickOutsideHandler.remove();
            _this.touchOutsideHandler.remove();
            _this.clickOutsideHandler = null;
            _this.touchOutsideHandler = null;
        }
    }

    onClick = (e) =>{
        var root = (0, _reactDom.findDOMNode)(this);
        if (contains(root, e.target)) {
            this.setState({
                popupVisible: true
            });
        }
        this.props.onOpenChange(true);
    }
    //是否是点击外部 或者 点击的是最后一个选项
    isOut = (target) => {
        //在选择框以及面板之外点击
        if (!contains(this.timespan.current, target) && (!contains($('._DatePicker')[0], target)) && (!contains($('._TimePicker')[0], target))) {
            return true;
        }
        return false;
    }
    isLast = (target)=> {
        //点击时刻选择的最后一位
        let targetIndex = $(target).closest('.ant-time-picker-panel-select');
        if ( $('._TimePicker .ant-time-picker-panel-select').index(targetIndex) === ($('.ant-time-picker-panel-select').length - 1) ) {
            return true;
        }
        return false;
    }
    isResetTime = (target) => {
        if (contains(this.link.current, target)) {
            return true;
        }
        return false;
    }
    onDocumentClick = async (event)=> {
        this.changeCloseReady = false;
        var target = event.target;
        if (this.isOut(target)) {
            this.setPopupVisibleFalse(false);
        }
        if (this.isLast(target) || this.isResetTime(target)) {
            this.changeCloseReady = true;
        }
    }
    setValue = (dateString, timeString, open) => {
        const {value: _value} = this.state;
        const {value} = this.props;
        let data = this.isControl ? value : _value;
        if (data === null || (typeof data === 'undefined')) {
            dateString = dateString ? dateString : moment().format(this.props.formatDate);
            timeString = timeString ? timeString : moment().format(this.props.formatTime);
        }
        else {
            let _dateTimeString = data.format(this.props.format).split(' ');
            dateString = dateString ? dateString : _dateTimeString[0];
            timeString = timeString ? timeString : _dateTimeString[1];
        }


        let dateTimeString = dateString + ' ' + timeString;
        this.props.onChange(moment(dateTimeString,this.props.format), dateTimeString, open);
        if (!this.isControl) {
            this.setState({
                value: moment(dateTimeString,this.props.format), dateTimeString
            });
        }
        return dateTimeString;
    }
    setPopupVisibleFalse = () => {
        if (!('popupVisible' in this.props)) {
            this.setState({
                popupVisible: false
            });
        }
        //面板变化时候的回调函数
        this.props.onOpenChange(false);
    }

    changeDate = (datemoment,dateString)=>{
        console.log(datemoment['isSameOrBefore'](moment().startOf('day')),datemoment.format('YYYY-MM-DD HH:mm'));
        if (!this._disabledDate(datemoment)) {
            this.setValue(dateString, null, true);
        }
        // this.changeDateReady = true;
    }
    changeTime = (timemoment,timeString)=>{
        // let _close = this.changeCloseReady && this.changeDateReady;
        let _close = this.changeCloseReady;
        this.setValue(null, timeString, !_close);
        if (_close) {
            this.setPopupVisibleFalse();
        }
    }

    resetTime = () =>{
        this.changeTime(null, '00:00');
    }

    _disabledDate = (elem) =>{
        const {disabledDate} = this.props;
        if (elem) {
            //没有勾选第一个日期时候的限制
            if (disabledDate) {
                if (typeof disabledDate === 'string') {
                    let _limit = disabledDate.replace('Today','');
                    let flag = false;
                    switch (_limit) {
                        case 'isSameOrBefore':
                            flag = elem[_limit](moment());
                            break;
                        case 'isAfter':
                            flag = elem[_limit](moment().endOf('day'));
                            break;
                        case 'isBefore':
                            flag = elem[_limit](moment().startOf('day'));
                            break;
                        case 'isSameOrAfter':
                            flag = elem[_limit](moment().startOf('day'));
                            break;
                        default:
                            flag = false;
                    }
                    if (flag) {
                        return true;
                    }
                }
                else if (typeof disabledDate === 'function') {
                    if (disabledDate(elem)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    render() {
        const {popupVisible, value: _value } = this.state;
        const {value, label, className, style} = this.props;
        let dateTimeString = '';
        let dateString = '';
        let timeString = '';
        let date = null;
        let time = null;
        let data = this.isControl ? value : _value;

        if (data !== null && (typeof data !== 'undefined')) {
            dateTimeString = data.format(this.props.format);
            dateString = dateTimeString.split(' ')[0];
            timeString = dateTimeString.split(' ')[1];
            date = moment(dateString, this.props.formatDate);
            time = moment(timeString, this.props.formatTime);
        }

        return (
            <span className={className}
                style={style}
            >
                {
                    label && (<span className="e-mr10">
                        {label}
                    </span>)
                }
                <span className="_datetimepicker"
                    style={{position: 'relative', display: 'inline-block',verticalAlign: 'bottom', width: '210px' }}
                >
                    <span
                        style={{border: '1px solid #d9d9d9',zIndex: 1, height: '34px',lineHeight: '1.5' , position: 'relative', display: 'flex', borderRadius: '4px'}}
                        onClick={this.onClick}
                        ref={this.timespan}
                    >
                        <input style={{flexGrow: 1, padding: '0 10px',outline: 'none', border: 'none', borderRight: '1px solid #d9d9d9', background: 'none'}}
                            value={dateTimeString}
                            readOnly
                            placeholder="请选择日期时刻"
                        />
                        <Icon type="calendar"/>
                    </span>
                    <span style={{position: 'absolute',left: 0,top: 0}}>
                        <DatePicker
                            dropdownClassName="_DatePicker"
                            open={popupVisible}
                            onChange={this.changeDate}
                            value={date}
                            disabledDate={this._disabledDate}
                        />
                    </span>
                    <span style={{position: 'absolute',right: '-200px',top: '-1px'}}>
                        <TimePicker
                            popupClassName="_TimePicker"
                            open={popupVisible}
                            format={'HH:mm'}
                            value={time}
                            addon={() => (
                                <div style={{textAlign: 'center',height: '23px'}}>
                                    <a onClick={this.resetTime}
                                        ref={this.link}
                                    >整点</a>
                                </div>
                            )}
                            onChange={this.changeTime}
                        />
                    </span>
                </span>
            </span>

        );
    }
}
//参数
DateTimePicker.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func
};
DateTimePicker.defaultProps = {
    onChange: $.noop,
    onOpenChange: $.noop,
    format: 'YYYY-MM-DD HH:mm',
    formatDate: 'YYYY-MM-DD',
    formatTime: 'HH:mm'
};
export default DateTimePicker;