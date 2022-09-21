import React, {useRef}  from 'react'

export const HookUseRef = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => { 
    inputEl.current.focus();
  };
    
  return (
    <div>
      <b>HookUseRef</b> <br/><br/>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus</button>
    </div>
  )
}
