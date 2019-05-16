/**
 * 分页绝对定位到底部的布局
 * 文本溢出隐藏并且有气泡提示
 */
import '../style/table.less';
import * as React from 'react';
import {Table} from 'antd';
import utils from 'utils';
import shouldComponentUpdate from 'shouldComponentUpdate';
import _ from 'lodash';
import Bubble from '../bubble';
class TableWanke extends React.Component {
   constructor(props) {
       super(props);
       this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
   }

   _transformRender = (render,column) =>{
       let _render;
       _render = (text, record, index)=>{
           let temp = {text, record, index, placement: column.placement};
           if (render) {
               return (
                   <Bubble {...temp}>{render(text, record, index)}</Bubble>
               );
           }
           return (
               <Bubble {...temp}>{text}</Bubble>
           );
       };
       return _render;
   }
   _transformColumns = (columns)=>{
       let _columns = _.cloneDeep(columns);
       utils.each(_columns,(elem,k)=>{
           _columns[k].render = this._transformRender(elem.render,_columns[k]);
       });
       return _columns;
   }
   _transformClassName = (className, pagination) =>{
       const _className = (pagination !== false ? 'staticTableSpin' : '') + (className ? ' ' + className : '');
       return _className;
   }

   render() {
       const {columns, className, pagination, getHeight, scroll, ...otherProps} = this.props;
       const _columns = this._transformColumns(columns);
       const _className = this._transformClassName(className, pagination);
       let scrolly = {};
       if (getHeight) {
           scrolly.y = getHeight() + 'px';
       }
       return (
           <Table
               columns={_columns}
               className={_className}
               pagination={pagination}
               scroll={{...scroll, ...scrolly}}
               {...otherProps}
           />
       );
   }
}
export default TableWanke;