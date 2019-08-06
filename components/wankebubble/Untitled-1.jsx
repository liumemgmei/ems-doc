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
import React from "react";
import { Popover } from "antd";
const containerStyle = {
    display: "inline-block",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    verticalAlign: "middle",
    wordBreak: "break-word",
};
class Bubble extends React.PureComponent {
    constructor(props) {
        super(props);
        this.isOverflow = (container, content) => {
            // console.log(
            //   content.getBoundingClientRect().width,
            //   container.getBoundingClientRect().width
            // );
            return (container.getBoundingClientRect().width -
                content.getBoundingClientRect().width <
                32);
        };
        this.isPopOver = (children) => {
            return ({}.toString.call(children).indexOf("Object") > -1 &&
                children.type &&
                (children.type).name === "Popover");
        };
        this.renderBase = () => {
            const { children } = this.props;
            return (<span style={containerStyle} ref={this.container}>
        <span ref={this.content}>{children}</span>
      </span>);
        };
        this.changePopOver = () => {
            const _a = this.props.children.props, { children } = _a, otherProps = __rest(_a, ["children"]);
            return (<Popover {...otherProps}>
        <span style={containerStyle}>
          <span>{children}</span>
        </span>
      </Popover>);
        };
        this.renderPopup = () => {
            // console.log(this.props.children);
            const { children, placement } = this.props;
            if (this.isPopOver(this.props)) {
                return this.changePopOver();
            }
            const _placement = placement ? placement : "top";
            return (<Popover content={children} placement={_placement}>
        <span style={containerStyle}>
          <span>{children}</span>
        </span>
      </Popover>);
        };
        this.state = {
            overflow: false,
            resize: false,
            title: '',
        };
        this.container = React.createRef();
        this.content = React.createRef();
    }
    componentDidMount() {
        const { resize } = this.state;
        if (!resize && this.isOverflow(this.container.current, this.content.current)) {
            this.setState({
                overflow: true,
                resize: true,
            });
        }
    }
    render() {
        const { children } = this.props;
        const { title } = this.state;
        return (<span style={containerStyle} title={title}>
      {children}
    </span>);
    }
}
export default Bubble;
