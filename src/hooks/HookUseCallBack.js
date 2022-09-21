import React, {useState, useMemo, useCallback} from 'react'


const HookUseCallBack = () => {
  const [values, setValue] = useState([3, 9, 6, 4, 2, 1])
    
  // const values = [3, 9, 6, 4, 2, 1];

  // This will always return the same value, a sorted array. Once the values array changes this will recompute 
  const momoizedValue = useMemo(() => values.sort(), [values]);

  // This will give me back a function that can be called later on. It will always return the same results unless the values array is modified
  const memoizedFunction = useCallback(() => values.sort(), [values]);

  return (
    <div>
        <b>UseCallBack</b> <br/>
        <p>momoizedValue: {momoizedValue}</p>
        <p>memoizedFunction: {memoizedFunction()}</p> 
    </div>
  )

}


export default HookUseCallBack