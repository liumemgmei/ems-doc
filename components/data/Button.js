/**
 * 继承component下面的组件
 * 按钮点击事件之后将data数据传到onClick方法种
 * autoSubmit：true 点击之后默认查询, 查询参数是最新的查询条件
 */
import React from 'react';
import withData from './withData';
import {Button} from 'ems';
function DataButton(props) {
    const { autoSubmit, setData, onSubmit, searchData, onClick, resetData, ...otherProps } = props;
    const _onClick = async (e)=> {
        if (onClick) {
            await onClick(searchData);
        }
        let _searchData = await setData();
        if (autoSubmit) {
            onSubmit(_searchData, e);
        }
    };
    return (
        <Button
            onClick={_onClick}
            {...otherProps}
        >
            {props.children}
        </Button>
    );
}
DataButton.defaultProps = {
    autoSubmit: false
};
export default withData(DataButton);