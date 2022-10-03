import React from 'react'
import { useContext } from 'react';
import { NameContext } from './Parent';

const Child2 = () => {
  const yourName = useContext(NameContext);

  return (
    <div>
        Child2
        <p>{yourName}</p>
    </div>
  )
}

export default Child2