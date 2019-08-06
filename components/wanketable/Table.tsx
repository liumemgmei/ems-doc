import React, { useMemo, useEffect, useState, useLayoutEffect } from 'react';
import {Table as AntTable } from 'antd';
import {TableProps} from '../table/interface';
import Bubble from '../wankebubble';
import withCon from '../wankecon';
import utils from '../wankeutils';
import $ from 'jquery';
interface WankeTableProps extends TableProps<any>{
  width:number,
  height:number,
  popover?:boolean,
  container:any
}

function getColums (columns: any[],container:any):any{
  let widthAll = 0;
  let scrollX= true;
  const newColumns = [...columns].map((item)=>({...item}))
 
  const getPopupContainer = ()=>{
    const tbody = container.querySelector('.ant-table-scroll .ant-table-tbody')
    if(utils.getRect(tbody).height < 240 ) {
      return document.body;
    }
    return tbody;
  };

  newColumns.map((item, key) => {
    let contentWidth;
    if(item.width && typeof item.width === 'number' ){
      contentWidth= item.width - 16*2;
    }

    if(item.width && typeof item.width === 'number' && scrollX){
      widthAll  += item.width;
    }
    else {
      scrollX = false;
      widthAll = 0;
    }

    let {placement} = item;
    if(key === 0 && !placement){
      placement = 'bottom';
    }
    if (typeof item.render === "undefined") {
      item.render = (text:any) => {
        return <Bubble getPopupContainer={getPopupContainer} placement={placement} contentWidth={contentWidth}>{text}</Bubble>;
      };
    } else {
      const {render} = item;
      item.render = (text:any, record:any) => {
        return (
          <Bubble placement={placement} getPopupContainer={getPopupContainer} contentWidth={contentWidth}>
            {render(text, record)}
          </Bubble>
        );
      };
    }
    return item;
  });
  return {newColumns, widthAll};
}


function WankeTable (props: WankeTableProps) {
  const {width, height,columns, popover,container, ...otherProps} = props;
  const [y,setY] = useState(0);
  let newColumns;
  let widthAll;
  if(columns) {
    const results = getColums(columns,container);
    newColumns = results.newColumns;
    widthAll = results.widthAll;
  }
  
  useLayoutEffect(()=>{
    console.log('effect');
      let newY;
      const title = container.querySelector('.ant-table-title');
      const thead = container.querySelector('.ant-table-thead') ;
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
        newY -= (utils.getRect(pagination).height + 16*2);
      }
      // 底部高度
      if (footer) {
        newY -= utils.getRect(footer).height;
      }
      if(utils.getRect(tbody).height >  newY) {
        setY(newY);
      }
      else {
        setY(0);
      }
  
  },[height])
  let scroll = {};
  if(widthAll && widthAll > width){
    scroll.x = width;
  }
  if(y){
    scroll.y = y;
  }
  console.log('scroll',scroll);
  return (
    <AntTable
      columns={newColumns}
      {...otherProps}
      scroll={{...scroll}}
    />
  );
}
export default withCon(WankeTable,{className: 'wanketable'});