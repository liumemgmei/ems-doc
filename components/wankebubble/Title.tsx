import React, { useState, useEffect, useRef } from 'react';

const containerStyle: React.DetailedHTMLProps<any, any> = {
  display: "inline-block",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  verticalAlign: "middle",
  wordBreak: "break-word",
};

function Title (props: any) {
  const { children } = props;
  const [title, setTitle] = useState('');
  const containerEl: any = useRef();
  const contentEl: any = useRef(null);

  const isOverflow = () => {
    return contentEl.current.getBoundingClientRect().width > containerEl.current.getBoundingClientRect().width
  }
  const getTitle = (node: any) => {
    function getChildren(_children: any): string {
      // 子元素有两个以上
      if (_children && ({}).toString.call(_children).indexOf('Array') > -1) {
         return '';
      }
      if (_children && _children.props && _children.props.children) {
        return getChildren(_children.props.children);
      }
      return _children;
    }
    return getChildren(node);
  }

  useEffect(() => {
    const flag = isOverflow();
    if (flag) {
      setTitle(getTitle(children));
    }
    else {
      setTitle('');
    }
  });
  return (
      <span style={containerStyle} ref={containerEl}>
        <span title={title} ref={contentEl}>{children}</span>
      </span>
  );
}
export default Title;
