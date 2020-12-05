import React, { Component } from 'react'

const Circles =(props)=>{
    return(

        <div style={{border:"2px solid black",height:"40px",width:"40px", borderRadius:"50px",
        top:props.top,left:props.left,backgroundColor:"white", position:"fixed", zIndex:100}}></div>

        // <div style={{width:"50px",height:"50px",borderRadius:"25px",top:props.top,
        // left:props.left,border:"1px solid black", zIndex:100,position:"absolute",
        // backgroundColor:"white"}}></div>

    )

}

export default Circles
