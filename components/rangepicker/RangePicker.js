/**
 * 提供样式功能
 * 提供label功能
 * 增加时间限制的功能:
 *  disabledDate 类型是string的时候值 有以下4种情况；disabledDate 也可以是function类型
 * {
 *  isBeforeToday: 今天之前的都置灰
 *  isAfterToday 今天之后的都置灰
 *  isSameOrAfterToday 今天之后包括今天 的都置灰
 *  isSameOrBeforeToday 今天之前包括今天 的都置灰
 * }
 *  增加区间长度限制的功能 maxLength 为number类型
 */
import moment from 'moment';
import React from 'react';
import {DatePicker} from 'antd';
const { RangePicker } = DatePicker;
export default class RangePickerWanke extends React.Component {
    render() {
        const {label, className, style, maxLength, onOpenChange, onCalendarChange, disabledDate, ...otherProps} = this.props;
        const _className = 'y_RangePicker ' + ( className ? className : '');
        let range = [];

        const _disabledDate = (elem, partial) =>{
            if (elem) {
                //没有勾选第一个日期时候的限制
                if (disabledDate) {
                    if (typeof disabledDate === 'string') {
                        let _limit = disabledDate.replace('Today','');
                        if (elem[_limit](moment().startOf('day'))) {
                            return true;
                        }
                    }
                    else if (typeof disabledDate === 'function') {
                        if (disabledDate(elem, partial)) {
                            return true;
                        }
                    }
                }
                //第二次点击日期的限制
                if (range.length && (!elem.isBetween(range[0],range[1]))) {
                    return true;
                }
            }
            return false;
        };
        const _onCalendarChange = async (dates,dateStrings) => {
            if (maxLength) {
                const _maxLength = parseInt(maxLength,10);
                if (dates.length === 1) {
                    let select = dates[0].format('YYYY-MM-DD');
                    range.push(moment(select,'YYYY-MM-DD').add(-_maxLength,'d'));
                    range.push(moment(select,'YYYY-MM-DD').add(_maxLength,'d'));
                }
                else {
                    range = [];
                }
            }
            if (onCalendarChange) {
                onCalendarChange();
            }
        };
        const _onOpenChange = async (open)=>{
            if (maxLength) {
                if (!open) {
                    range = [];
                }
            }
            if (onOpenChange) {
                onOpenChange();
            }
        };

        return (
            <div
                className={_className}
                style={style}
            >
                {
                    label && (<span className="label">
                        {label}
                    </span>)
                }
                <RangePicker
                    {...otherProps}
                    disabledDate={_disabledDate}
                    onCalendarChange={_onCalendarChange}
                    onOpenChange={_onOpenChange}
                />
            </div>
        );
    }
}

RangePickerWanke.defaultProps = {
    disabledDate: '',
    maxLength: null
};