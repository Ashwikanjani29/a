import React from 'react'
import SubChild from './SubChild';

const PropChildex = (props) => {
    console.log(props);
  return (
    <div>PropChildex
        <h1>hi</h1>
        <SubChild/>

    </div>
  )
}

export default PropChildex