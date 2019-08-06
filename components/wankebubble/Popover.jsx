var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useRef, useEffect } from 'react';
import Popover from '../popover';
const containerStyle = {
    display: "inline-block",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    verticalAlign: "middle",
    wordBreak: "break-word",
};
function Bubble(props) {
    const { children, width, placement, getPopupContainer, contentWidth } = props;
    const [overflow, setOverflow] = useState(false);
    const containerEl = useRef(null);
    const contentEl = useRef(null);
    const contentwidth = {};
    if (contentWidth) {
        contentwidth.width = contentWidth;
    }
    const isOverflow = () => {
        return contentEl.current.getBoundingClientRect().width > containerEl.current.getBoundingClientRect().width;
    };
    const isPopOver = () => {
        return ({}.toString.call(children).indexOf("Object") > -1 &&
            children.type &&
            (children.type).name === "Popover");
    };
    useEffect(() => {
        const flag = isOverflow();
        if (flag) {
            setOverflow(true);
        }
        else {
            setOverflow(false);
        }
    });
    if (isPopOver()) {
        const _a = children.props, { children: popchildren } = _a, otherProps = __rest(_a, ["children"]);
        if (overflow === true) {
            return (<Popover {...otherProps}>
          <span style={Object.assign({}, containerStyle, contentwidth)} ref={containerEl}>
            <span ref={contentEl}>{popchildren}</span>
          </span>
        </Popover>);
        }
        return (<span style={Object.assign({}, containerStyle, contentwidth)} ref={containerEl}>
          <span ref={contentEl}>{popchildren}</span>
        </span>);
    }
    if (overflow === true) {
        const getPopoverWidth = () => {
            if (width) {
                return width;
            }
            return containerEl.current.getBoundingClientRect().width;
        };
        return (<Popover content={<div style={{ width: getPopoverWidth(), wordBreak: 'break-word' }}>{children}</div>} placement={placement} getPopupContainer={getPopupContainer}>
        <span style={Object.assign({}, containerStyle, contentwidth)} ref={containerEl}>
          <span ref={contentEl}>{children}</span>
        </span>
      </Popover>);
    }
    return (<span style={Object.assign({}, containerStyle, contentwidth)} ref={containerEl}>
      <span ref={contentEl}>{children}</span>
    </span>);
}
Bubble.defaultProps = {
    placement: 'top',
};
export default Bubble;
