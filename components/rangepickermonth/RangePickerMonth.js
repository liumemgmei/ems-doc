/**
 * 提供基本的样式（分3个皮肤）
 * 鼠标悬浮气泡提示
 */
import * as React from 'react';
import shouldComponentUpdate from 'shouldComponentUpdate';
import {DatePicker} from 'antd';
const { RangePicker } = DatePicker;
import contains from 'rc-util/lib/Dom/contains';
import './style/index.less';
import $ from 'jquery';

//受控组件


class RangePickerMonth extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
        this.calendar = React.createRef();
    }

    isLastMonth = (target) =>{
        let targetPanel = target.closest('.ant-calendar-month-panel');
        if($('._rangepickermonth .ant-calendar-month-panel').index(targetPanel) === 1 && target.hasClass('ant-calendar-month-panel-month')){
            return true;
        }
        return false;
    }
    onClick = (e) =>{
        let target = $(e.target);
        let picker = this.calendar.current.picker;
        if (picker.state.open && this.isLastMonth(target)) {
            this.isCloseReady = true;
        }
        else {
            this.isCloseReady = false; 
        }
    }

    componentDidUpdate() {
        let picker = this.calendar.current.picker;
        if(this.isCloseReady && !this.props.isOver){
            picker.setState({open:false})
        }
    }
    render() {
        const {value, renderExtraFooter, className, ...otherProps} = this.props;
        const _className = 'y_RangePicker ' + ( className ? className : '');

        return (
            <span onClick={this.onClick} className={_className}>
                <RangePicker
                    placeholder={['开始月份', '结束月份']}
                    format="YYYY-MM"
                    mode={['month', 'month']}
                    value={value}
                    ref={this.calendar}
                    // ref = {this.calendar} 
                    // onPanelChange={this.handlePanelChange}
                    renderExtraFooter={renderExtraFooter}
                    dropdownClassName="_rangepickermonth"
                    {...otherProps}
                />
            </span>
        )
    }
}
export default RangePickerMonth;