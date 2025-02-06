import React from 'react'
import Child1 from './Child1'

const Child = (props) => {
    console.log(props);
  return (
    <div>Child
        <Child1/>   
        </div>
  )
}

export default Child