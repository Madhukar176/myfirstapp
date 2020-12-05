import React, { Component } from 'react'

const Circles =(props)=>{
    return(

        <div style={{border:"2px solid black",height:"40px",width:"40px", borderRadius:"50px",
        top:props.top,left:props.left,backgroundColor:"white", position:"fixed", zIndex:1}}></div>

        

    )

}

export default Circles
