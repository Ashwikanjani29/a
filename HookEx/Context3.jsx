import React, { useContext } from 'react'
import { GlobalDataProvider } from './ContextAPI'

const Context3 = () => {
    const data =useContext(GlobalDataProvider);
  return (
    <div>
        <h1>{data.count}</h1>
    </div>
  )
}

export default Context3