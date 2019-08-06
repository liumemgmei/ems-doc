import React from 'react';
import Popover from './Popover';
import Title from './Title';


export default function WankeBubble(props: any) {
  const { popover, ...otherProps } = props;
  const { children } = props;

  if (popover === false) {
    return children;
  }
  if (popover !== 'title') {
    return <Popover {...otherProps} />
  }
  return <Title {...otherProps} />
}
