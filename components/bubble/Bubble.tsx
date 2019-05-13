/**
 * 实现块状区域溢出隐藏并且展示气泡提示的功能
 * 如果块状区域内容是a标签，将...也要变蓝色
 * 如果子元素包含popover，那么展示气泡的内容则替换为popover中的内容
 */
import * as React from 'react';
import $ from 'jquery';
import {Popover} from 'antd';
import shouldComponentUpdate from 'shouldComponentUpdate';
import './style/index.less';
class Bubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                visibility: 'hidden',
                display: 'block',
                width: '100%',
                whiteSpace: 'nowrap'
            }
        };
        this.content = React.createRef();
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        let content = $(this.content.current);
        if (content && content[0] && content[0].scrollWidth > content.parent().width()) {
            this.setState({
                style: {
                    visibility: 'visible',
                    display: 'block',
                    width: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }
            });
        }
        else {
            this.setState({
                style: {
                    visibility: 'visible'
                }
            });
        }
    }

    _renderCell = (props) =>{
        const {children, className, style } = props;
        let _className = (className ? className : '');
        if (children && children.type && (children.type.name === 'A' || children.type === 'a')) {
            _className = _className + '_a';
        }
        return (
            <span
                style={style}
                ref={this.content}
                className={_className}
            >
                {children}
            </span>
        );
    }

    _renderBase = (props)=> {
        const {children, style ,placement, content} = props;
        const cell = this._renderCell(props);
        let _content = content;
        if (children && children.type && (children.type.name === 'A' || children.type === 'a')) {
            _content = _content.props.children;
        }
        if (style.overflow === 'hidden') {
            return (
                <Popover
                    overlayStyle={{ maxWidth: '850px' }}
                    content={_content}
                    placement={placement ? placement : 'top'}
                >
                    {cell}
                </Popover>
            );
        }
        return cell;
    }

    _changePopover = (props)=>{
        const {otherPopoverProps, style} = props;
        const cell = this._renderCell(props);
        if (style.overflow === 'hidden') {
            return (
                <Popover
                    {...otherPopoverProps}
                >
                    {cell}
                </Popover>
            );
        }
        else{
            return cell;
        }
    }

    render() {
        const {children, className, text, placement} = this.props;
        const {style} = this.state;
        let _text;
        let _className = className ? className : '';


        if (typeof children === 'object' && children.type.name === 'Popover') {
            if (children.type.name === 'Popover') {
                const {children: popoverChildren,...otherPopoverProps} = children.props;
                return this._changePopover({
                    children: popoverChildren,
                    className: _className,
                    otherPopoverProps,
                    style: style
                });
            }
        }
        return this._renderBase({
            placement: placement,
            children: children,
            className: _className,
            content: text ? text : children,
            style: style
        });
    }
}
export default Bubble;