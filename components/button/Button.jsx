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
 * 提供基本的样式（分3个皮肤）
 * 鼠标悬浮气泡提示
 */
import * as React from 'react';
import shouldComponentUpdate from 'shouldComponentUpdate';
import { Button } from 'antd';
class ButtonWanke extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = shouldComponentUpdate.bing(this);
    }
    render() {
        const _a = this.props, { className, type, active, children } = _a, otherProps = __rest(_a, ["className", "type", "active", "children"]);
        let _className = '_button'
            + (className ? (' ' + className) : '')
            + (type ? (' ' + type) : '')
            + (active ? ' active' : '');
        return (<Button className={_className} {...otherProps}>
                {children}
            </Button>);
    }
}
export default ButtonWanke;
