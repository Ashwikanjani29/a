import React from 'react'

const FBCpropex =(props)=>{
    console.log(props);
    if(props.isMarried==true){
        return (
            <div>
                <h1>{props.name} is a married person</h1>
                {
                    props.hobbies.map(hobby=>{
                        return<li>{hobby}</li>
                    })
                }
            </div>
        )
    }
    else{
        return <h1>{props.name} is not married</h1>
    }
}
export default FBCpropex;
