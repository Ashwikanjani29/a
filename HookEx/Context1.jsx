import React, { useState } from 'react'
import Context2 from './Context2'

const Context1 = () => {
    const[count,setCount]=useState(0);
    let incre=()=>{
        setCount(count+1);

    }
  return (
    <div>
        <Context2/>
    </div>
  )
}

export default Context1