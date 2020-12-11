import React, { Component } from 'react'
import './style.css'
import './RollDice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {  faDiceOne,faDiceTwo,faDiceThree,faDiceFour, faDiceFive,faDiceSix} from '@fortawesome/free-solid-svg-icons';

library.add(fab,faDiceOne,faDiceTwo,faDiceThree,faDiceFour, faDiceFive,faDiceSix)

export class RollingTheDice extends Component {
    
    static defaultProps={
        diceFaces:["one", "two","three", "four", "five", "six"]             //different faces of dice
    }

    constructor(props) {
        super(props)
    
        this.state = {
             dice: "one",           //dice will show face of one when in static state
             rolling:false         // dice will not roll unless clicked
        }
        this.rollDice=this.rollDice.bind(this)
    }
    
    //function to roll the dice
    rollDice(){
         const {diceFaces}=this.props
         this.setState({
             dice: diceFaces[Math.floor(Math.random()*diceFaces.length)],
             rolling:true
         })

        

         
        
          setTimeout(() => { 
      
        //     // Set rolling to false again when time over 
             this.setState({rolling:false}) 
           },500)      
           //console.log(this.state.dice);

        }

          

    render() {

        const handleBtn = this.state.rolling ?  
        'RollDice-rolling' : ''
        return (

            <div >
                

                { <div className="fa-7x">
                <FontAwesomeIcon icon={"fas",`dice-${this.state.dice}`}/> 

               </div> }



               

                <button 
                    className={handleBtn}
                    onClick={this.rollDice}>
                    {this.state.rolling ? 'Rolling' : 'Roll Dice!'} 


 </button>

                
                </div>
                
            
        )
    }
}

export default RollingTheDice
