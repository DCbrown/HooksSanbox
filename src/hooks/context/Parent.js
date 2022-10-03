import React from 'react'
import Child1 from './Child1';
import { useState, createContext } from 'react';

// export const CountContext = createContext();
export const NameContext = createContext();

const Parent = () => {
  const [count, setCount] = useState(0);
  const [yourName, setYourName] = useState("");


  return (
    <>
    <NameContext.Provider value={yourName}>
        <Child1/>
        <hr></hr>
        <h1>Parent</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
          Add Counter
        </button>
        <br/>
        <input onChange={e => setYourName(e.target.value)} type="text" placeholder="Enter Your Name" value={yourName}></input>
        <br/>{yourName}
    </NameContext.Provider>
    </>
  )
}

export default Parent