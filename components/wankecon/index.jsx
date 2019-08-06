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
import React, { useState, useCallback, useLayoutEffect } from 'react';
import utils from '../wankeutils';
function useClientRect() {
    const [node, setNode] = useState(null);
    const ref = useCallback(dom => {
        if (dom !== null) {
            setNode(dom);
        }
    }, []);
    return [node, ref];
}
// Com 的类型是react组件
function withCon(Com, divprops) {
    function Con(props) {
        const { forwardedRef } = props, otherProps = __rest(props, ["forwardedRef"]);
        const [node, ref] = useClientRect();
        const [width, setWidth] = useState();
        const [height, setHeight] = useState();
        useLayoutEffect(() => {
            if (node) {
                setWidth(utils.getRect(node).width);
                setHeight(utils.getRect(node).height);
                const resize = () => {
                    setWidth(utils.getRect(node).width);
                    setHeight(utils.getRect(node).height);
                };
                window.addEventListener('resize', resize);
                return () => {
                    window.removeEventListener("resize", resize);
                };
            }
        });
        return (<div {...divprops} style={{ width: '100%', height: '100%', overflow: 'auto', wordBreak: 'break-word' }} ref={ref}>
          {width && <Com {...otherProps} container={node} width={width} height={height} ref={forwardedRef}/>}
        </div>);
    }
    return React.forwardRef((props, ref) => {
        return <Con {...props} forwardedRef={ref}/>;
    });
}
;
export default withCon;
