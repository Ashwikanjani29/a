import React from 'react'
const FBCStateex = () => {
    // const data =React.useStste("hi");

    const [value,setValue]=React.useState(0);
    console.log(value);
    const changeNuber=()=>{
        setValue(1000);
    }
  return (
    <div>FBCStateex
        <h1>{value}</h1>
        <button onClick={changeNuber}>Change number</button>
    </div>
  )
}

export default FBCStateex