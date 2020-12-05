import React, { Component } from 'react'

const Bigbox= (props)=>{
    return(
        <div style={{border:"2px solid black",height:props.height,width:props.width,
        backgroundColor:props.color,left:props.left,top:props.top,position:"fixed"}}></div>
    )

}
    


export default Bigbox
