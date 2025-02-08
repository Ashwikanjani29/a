import React, { Component } from 'react'
import './Styles.css';

class Assignment extends Component {
    constructor(props){
        super(props);
        this.state={
            clicked:false,
            msg:'hello'
        }
    }
    changeMessage=()=>{
        this.setState({
            clicked:true,
            msg:'hi'
        })
    }
  render() {
    let applyStyle=this.state.clicked ? 'heading':'heading2'
    return (
      <div>
        <h1 className={applyStyle}>{this.state.msg}</h1>
        <button onClick={this.changeMessage}>Click</button>
      </div>
    )
  }
}
export default Assignment
