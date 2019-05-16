var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/**
 * 分页绝对定位到底部的布局
 * 文本溢出隐藏并且有气泡提示
 */
import '../style/table.less';
import * as React from 'react';
import { Table } from 'antd';
import utils from 'utils';
import shouldComponentUpdate from 'shouldComponentUpdate';
import _ from 'lodash';
import Bubble from '../bubble';
class TableWanke extends React.Component {
    constructor(props) {
        super(props);
        this._transformRender = (render, column) => {
            let _render;
            _render = (text, record, index) => {
                let temp = { text, record, index, placement: column.placement };
                if (render) {
                    return (<Bubble {...temp}>{render(text, record, index)}</Bubble>);
                }
                return (<Bubble {...temp}>{text}</Bubble>);
            };
            return _render;
        };
        this._transformColumns = (columns) => {
            let _columns = _.cloneDeep(columns);
            utils.each(_columns, (elem, k) => {
                _columns[k].render = this._transformRender(elem.render, _columns[k]);
            });
            return _columns;
        };
        this._transformClassName = (className, pagination) => {
            const _className = (pagination !== false ? 'staticTableSpin' : '') + (className ? ' ' + className : '');
            return _className;
        };
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }
    render() {
        const _a = this.props, { columns, className, pagination, getHeight, scroll } = _a, otherProps = __rest(_a, ["columns", "className", "pagination", "getHeight", "scroll"]);
        const _columns = this._transformColumns(columns);
        const _className = this._transformClassName(className, pagination);
        let scrolly = {};
        if (getHeight) {
            scrolly.y = getHeight() + 'px';
        }
        return (<Table columns={_columns} className={_className} pagination={pagination} scroll={Object.assign({}, scroll, scrolly)} {...otherProps}/>);
    }
}
export default TableWanke;
