import React from 'react'
import './Styles.css';

function Functional(props) {
    console.log(props); 
    let applyStyle=props.apply ?'heading':' '

    let inlineStyle={
        color:'green',
        backgroungColor:'red',
        fontSize:'50px'
    }

  return (
    <div>
        <h1 className={`${applyStyle} font-style`}>Functional {props.clgName}{props.city}</h1>
        {props.children}
        <h1 style={inlineStyle}>good afternoon</h1>
    </div>
  )
}

export default Functional

