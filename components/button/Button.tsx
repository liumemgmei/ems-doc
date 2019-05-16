/**
 * 提供基本的样式（分3个皮肤）
 * 鼠标悬浮气泡提示
 */
import * as React from 'react';
import shouldComponentUpdate from 'shouldComponentUpdate';
import {Button} from 'antd';
class ButtonWanke extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = shouldComponentUpdate.bing(this);
    }

    render() {
        const {className, type, active, children, ...otherProps} = this.props;
        let _className= '_button' 
                        + (className ? (' '+className) : '') 
                        + (type ? (' '+ type) : '')
                        + (active ? ' active' : '');
        return (
            <Button
                className={_className}
                {...otherProps}
            >
                {children}
            </Button>
        );
    }
}
export default ButtonWanke;