/**
 * 优化组件性能
 */
import eq from './eq';
export default function shouldComponentUpdate(nextProps, nextState) {
    const {props, state} = this;
    return !(eq(nextProps, props) && eq(nextState, state));
}