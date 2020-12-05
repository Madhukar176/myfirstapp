import React, { Component } from 'react'
import './mystyle.css';
import Circles from "./Circles";
import Bigbox from "./Bigbox";

function Board() {
    //render() {
        return (
      
<div>
  <div class="green-cirlces">
     <Circles top="70px" left="475px" />
     <Circles top="170px" left="475px"/>
     <Circles top="70px" left="575px"/>
     <Circles top="170px" left="575px"/>
  </div>

  <div class="red-cirlces">
     <Circles top="70px" left="853px"/>
     <Circles top="170px" left="853px"/>
     <Circles top="70px" left="953px"/>
     <Circles top="170px" left="953px"/>
  </div>
  <div class="blue-cirlces">
     <Circles top="455px" left="853px"/>
     <Circles top="555px" left="853px"/>
     <Circles top="455px" left="953px"/>
     <Circles top="555px" left="953px"/>
  </div>
  <div class="yellow-cirlces">
     <Circles top="455px" left="475px"/>
     <Circles top="555px" left="475px"/>
     <Circles top="455px" left="575px"/>
     <Circles top="555px" left="575px"/>
  </div>

  {/*   layout for color squares */}

    
<div class="bigbox-layout">
  <Bigbox height="250px" width="250px" top="20px" left="420px" color="green"/>
  <Bigbox height="250px" width="250px" top="20px" left="798px" color="red"/>
  <Bigbox height="250px" width="250px" top="398px" left="420px" color="yellow"/>
  <Bigbox height="250px" width="250px" top="398px" left="798px" color="blue"/>
  </div> 

{/*  beginning of grid layout*/}

  <div class="grid-layout-red-1">
  <Bigbox height="40px" width="40px" top="20px" left="672px" color="white"/>
  <Bigbox height="40px" width="40px" top="62px" left="672px" color="white"/>
  <Bigbox height="40px" width="40px" top="104px" left="672px" color="white"/>
  <Bigbox height="40px" width="40px" top="146px" left="672px" color="white"/>
  <Bigbox height="40px" width="40px" top="188px" left="672px" color="white"/>
  <Bigbox height="40px" width="40px" top="230px" left="672px" color="white"/>

</div>
<div class="grid-layout-red-2">
  <Bigbox height="40px" width="40px" top="20px" left="714px" color="white"/>
  <Bigbox height="40px" width="40px" top="62px" left="714px" color="red"/>
  <Bigbox height="40px" width="40px" top="104px" left="714px" color="red"/>
  <Bigbox height="40px" width="40px" top="146px" left="714px" color="red"/>
  <Bigbox height="40px" width="40px" top="188px" left="714px" color="red"/>
  <Bigbox height="40px" width="40px" top="230px" left="714px" color="red"/>

</div>

<div class="grid-layout-red-3">
  <Bigbox height="40px" width="40px" top="20px" left="756px" color="white"/>
  <Bigbox height="40px" width="40px" top="62px" left="756px" color="red"/>           {/*  block to start the movement of red pointer*/}
  <Bigbox height="40px" width="40px" top="104px" left="756px" color="white"/>
  <Bigbox height="40px" width="40px" top="146px" left="756px" color="white"/>
  <Bigbox height="40px" width="40px" top="188px" left="756px" color="white"/>
  <Bigbox height="40px" width="40px" top="230px" left="756px" color="white"/>
</div>
<div class="grid-layout-green-1">
  <Bigbox height="40px" width="40px" top="272px" left="420px" color="white"/>
  <Bigbox height="40px" width="40px" top="272px" left="462px" color="green"/>           {/*  block to start the movement of green pointer*/}
  <Bigbox height="40px" width="40px" top="272px" left="504px" color="white"/>
  <Bigbox height="40px" width="40px" top="272px" left="546px" color="white"/>
  <Bigbox height="40px" width="40px" top="272px" left="588px" color="white"/>
  <Bigbox height="40px" width="40px" top="272px" left="630px" color="white"/>
</div>
<div class="grid-layout-green-2">
  <Bigbox height="40px" width="40px" top="314px" left="420px" color="white"/>
  <Bigbox height="40px" width="40px" top="314px" left="462px" color="green"/>
  <Bigbox height="40px" width="40px" top="314px" left="504px" color="green"/>
  <Bigbox height="40px" width="40px" top="314px" left="546px" color="green"/>
  <Bigbox height="40px" width="40px" top="314px" left="588px" color="green"/>
  <Bigbox height="40px" width="40px" top="314px" left="630px" color="green"/>
 
</div>


<div class="grid-layout-green-3">
  <Bigbox height="40px" width="40px" top="356px" left="420px" color="white"/>
  <Bigbox height="40px" width="40px" top="356px" left="462px" color="white"/>
  <Bigbox height="40px" width="40px" top="356px" left="504px" color="white"/>
  <Bigbox height="40px" width="40px" top="356px" left="546px" color="white"/>
  <Bigbox height="40px" width="40px" top="356px" left="588px" color="white"/>
  <Bigbox height="40px" width="40px" top="356px" left="630px" color="white"/>
</div>
<div class="grid-layout-blue-1">
<Bigbox height="40px" width="40px" top="356px" left="798px" color="white"/>
<Bigbox height="40px" width="40px" top="356px" left="840px" color="white"/>
<Bigbox height="40px" width="40px" top="356px" left="882px" color="white"/>
<Bigbox height="40px" width="40px" top="356px" left="924px" color="white"/>
<Bigbox height="40px" width="40px" top="356px" left="966px" color="blue"/>
<Bigbox height="40px" width="40px" top="356px" left="1008px" color="white"/>

</div>
<div class="grid-layout-blue-2">
<Bigbox height="40px" width="40px" top="314px" left="798px" color="blue"/>
<Bigbox height="40px" width="40px" top="314px" left="840px" color="blue"/>
<Bigbox height="40px" width="40px" top="314px" left="882px" color="blue"/>
<Bigbox height="40px" width="40px" top="314px" left="924px" color="blue"/>
<Bigbox height="40px" width="40px" top="314px" left="966px" color="blue"/>    {/*  block to start the movement of blue pointer*/}
<Bigbox height="40px" width="40px" top="314px" left="1008px" color="white"/>

</div>
<div class="grid-layout-blue-3">
<Bigbox height="40px" width="40px" top="272px" left="798px" color="white"/>
<Bigbox height="40px" width="40px" top="272px" left="840px" color="white"/>
<Bigbox height="40px" width="40px" top="272px" left="882px" color="white"/>
<Bigbox height="40px" width="40px" top="272px" left="924px" color="white"/>
<Bigbox height="40px" width="40px" top="272px" left="966px" color="white"/>
<Bigbox height="40px" width="40px" top="272px" left="1008px" color="white"/>

</div>

<div class="grid-layout-yellow-1">
<Bigbox height="40px" width="40px" top="398px" left="672px" color="white"/>
<Bigbox height="40px" width="40px" top="440px" left="672px" color="white"/>
<Bigbox height="40px" width="40px" top="482px" left="672px" color="white"/>
<Bigbox height="40px" width="40px" top="524px" left="672px" color="white"/>
<Bigbox height="40px" width="40px" top="566px" left="672px" color="yellow"/>
<Bigbox height="40px" width="40px" top="608px" left="672px" color="white"/>

</div>

<div class="grid-layout-yellow-2">
<Bigbox height="40px" width="40px" top="398px" left="714px" color="yellow"/>
<Bigbox height="40px" width="40px" top="440px" left="714px" color="yellow"/>
<Bigbox height="40px" width="40px" top="482px" left="714px" color="yellow"/>
<Bigbox height="40px" width="40px" top="524px" left="714px" color="yellow"/>
<Bigbox height="40px" width="40px" top="566px" left="714px" color="yellow"/>
<Bigbox height="40px" width="40px" top="608px" left="714px" color="white"/>

</div>

<div class="grid-layout-yellow-3">
<Bigbox height="40px" width="40px" top="398px" left="756px" color="white"/>
<Bigbox height="40px" width="40px" top="440px" left="756px" color="white"/>
<Bigbox height="40px" width="40px" top="482px" left="756px" color="white"/>
<Bigbox height="40px" width="40px" top="524px" left="756px" color="white"/>
<Bigbox height="40px" width="40px" top="566px" left="756px" color="white"/>
<Bigbox height="40px" width="40px" top="608px" left="756px" color="white"/>

</div>
 

 </div>
        )
    //}
}

export default Board
