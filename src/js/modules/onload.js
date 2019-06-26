const onLoad = (target, event, handler) => {
    return target.addEventListener(event, handler);
  };
  
  export { onLoad };