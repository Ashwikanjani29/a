import React, { useContext } from 'react'
import Context3 from './Context3'
import {GlobalDataProvider} from 'react'

export const Context2 = () => {
    const data=useContext();
  return (
    <div>
        <hr/>
        <Context3/>
    </div>
  )
}

export default Context2