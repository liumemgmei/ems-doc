import React,{useState, useEffect, useCallback, useLayoutEffect} from 'react';
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
  function withCon(Com: any, divprops) {
    function Con(props:any) {
      const {forwardedRef, ...otherProps} = props;
      const [node, ref] = useClientRect();
      const [width,setWidth] = useState();
      const [height,setHeight] = useState();
    
      useLayoutEffect(()=>{
        if(node){
          setWidth(utils.getRect(node).width);
          setHeight(utils.getRect(node).height);
          const resize = ()=>{
            setWidth(utils.getRect(node).width);
            setHeight(utils.getRect(node).height);
          }
          window.addEventListener('resize',resize);
          return () => {
            window.removeEventListener("resize", resize);
          };
        }
      })
      return (
        <div {...divprops} style={{width: '100%', height:'100%',overflow: 'auto', wordBreak:'break-word'}} ref={ref}>
          {width && <Com {...otherProps} container={node} width={width} height={height} ref={forwardedRef} /> }
        </div>
      );
    }
    return React.forwardRef((props, ref) => {
      return <Con {...props} forwardedRef={ref} />;
    });
  };

export default withCon;
