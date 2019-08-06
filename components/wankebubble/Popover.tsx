import React, { useState, useRef, useEffect } from 'react';
import {Popover} from 'antd';
import { Function } from '@babel/types';

const containerStyle: React.DetailedHTMLProps<any, any> = {
  display: "inline-block",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  verticalAlign: "middle",
  wordBreak: "break-word",
};

interface Props {
  children: any,
  placement: "top" | "left" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | undefined ,
  width?: number | undefined | string,
  contentWidth?:number,
  getPopupContainer: Function
}
function Bubble(props: Props) {

  const { children, width, placement, getPopupContainer, contentWidth } = props;
  const [overflow, setOverflow] = useState(false);

  const containerEl: any = useRef(null);
  const contentEl: any = useRef(null);
  const contentwidth: any = {};
  if(contentWidth){
    contentwidth.width = contentWidth;

  }
  const isOverflow = () => {
    return contentEl.current.getBoundingClientRect().width > containerEl.current.getBoundingClientRect().width
  }
  const isPopOver = () => {
    return (
      {}.toString.call(children).indexOf("Object") > -1 &&
      children.type &&
      (children.type).name === "Popover"
    );
  };


  useEffect(() => {
    const flag = isOverflow();
    if (flag) {
      setOverflow(true);
    }
    else {
      setOverflow(false);
    }
  })

  if (isPopOver()) {
    const{ props: { children : popchildren, ...otherProps } } = children;
    if (overflow === true) {
      return (
        <Popover {...otherProps}>
          <span style={{...containerStyle,...contentwidth}} ref={containerEl}>
            <span ref={contentEl}>{popchildren}</span>
          </span>
        </Popover>
      );
    }
    return (
        <span style={{...containerStyle,...contentwidth}} ref={containerEl}>
          <span ref={contentEl}>{popchildren}</span>
        </span>
    );
  }
  if (overflow === true) {
    const getPopoverWidth = () => {
      if(width){
        return width;
      }
      return containerEl.current.getBoundingClientRect().width ;
    }
    return (
      <Popover content={<div style={{ width:getPopoverWidth(), wordBreak:'break-word' }}>{children}</div>} placement={placement} getPopupContainer={getPopupContainer}>
        <span style={{...containerStyle,...contentwidth}} ref={containerEl}>
          <span ref={contentEl}>{children}</span>
        </span>
      </Popover>
    );
  }
  return (
    <span style={{...containerStyle,...contentwidth}} ref={containerEl}>
      <span ref={contentEl}>{children}</span>
    </span>
  );
}
Bubble.defaultProps = {
  placement: 'top',
}
export default Bubble;
