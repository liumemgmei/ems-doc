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
import React, { useState, useLayoutEffect } from 'react';
import AntTable from '../table';
import Bubble from '../wankebubble';
import withCon from '../wankecon';
import utils from '../wankeutils';
function getColums(columns, container) {
    let widthAll = 0;
    let scrollX = true;
    const newColumns = [...columns].map((item) => (Object.assign({}, item)));
    const getPopupContainer = () => {
        const tbody = container.querySelector('.ant-table-scroll .ant-table-tbody');
        if (utils.getRect(tbody).height < 240) {
            return document.body;
        }
        return tbody;
    };
    newColumns.map((item, key) => {
        let contentWidth;
        if (item.width && typeof item.width === 'number') {
            contentWidth = item.width - 16 * 2;
        }
        if (item.width && typeof item.width === 'number' && scrollX) {
            widthAll += item.width;
        }
        else {
            scrollX = false;
            widthAll = 0;
        }
        let { placement } = item;
        if (key === 0 && !placement) {
            placement = 'bottom';
        }
        if (typeof item.render === "undefined") {
            item.render = (text) => {
                return <Bubble getPopupContainer={getPopupContainer} placement={placement} contentWidth={contentWidth}>{text}</Bubble>;
            };
        }
        else {
            const { render } = item;
            item.render = (text, record) => {
                return (<Bubble placement={placement} getPopupContainer={getPopupContainer} contentWidth={contentWidth}>
            {render(text, record)}
          </Bubble>);
            };
        }
        return item;
    });
    return { newColumns, widthAll };
}
function WankeTable(props) {
    const { width, height, columns, popover, container } = props, otherProps = __rest(props, ["width", "height", "columns", "popover", "container"]);
    const [y, setY] = useState(0);
    let newColumns;
    let widthAll;
    if (columns) {
        const results = getColums(columns, container);
        newColumns = results.newColumns;
        widthAll = results.widthAll;
    }
    useLayoutEffect(() => {
        console.log('effect');
        let newY;
        const title = container.querySelector('.ant-table-title');
        const thead = container.querySelector('.ant-table-thead');
        const pagination = container.querySelector('.ant-table-pagination');
        const footer = container.querySelector('.ant-table-footer');
        const tbody = container.querySelector('.ant-table-body');
        newY = height;
        // 头部高度
        if (title) {
            newY -= utils.getRect(title).height;
        }
        // 表头高度
        if (thead) {
            newY -= utils.getRect(thead).height;
        }
        // 分页高度
        if (pagination) {
            newY -= (utils.getRect(pagination).height + 16 * 2);
        }
        // 底部高度
        if (footer) {
            newY -= utils.getRect(footer).height;
        }
        if (utils.getRect(tbody).height > newY) {
            setY(newY);
        }
        else {
            setY(0);
        }
    }, [height]);
    let scroll = {};
    if (widthAll && widthAll > width) {
        scroll.x = width;
    }
    if (y) {
        scroll.y = y;
    }
    return (<AntTable columns={newColumns} {...otherProps} scroll={Object.assign({}, scroll)}/>);
}
export default withCon(WankeTable, { className: 'wanketable' });
