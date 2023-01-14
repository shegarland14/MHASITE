import React from 'react';
import './sell.css';

export default function Sell(){
    return (
        <div className="sell">
            <h1> WANT TO SELL YOUR MOBILE HOME?</h1>
            <h2> FOLLOW THESE 3 THREE STEPS</h2>

        <div className="steps">
            <div className="col1"> 
             <button clasName="button1"> STEP 1</button>
                <h3>CONTACT US <br/> 803 848 7472</h3>
                <i  class="fa fa-volume-control-phone fa-4x" aria-hidden="true"></i>
             </div>

            <div className="col2"> 
            <button className="button2"> STEP 2</button>
                <h3>GET OFFER</h3>
                <i class="fa fa-handshake-o fa-4x" aria-hidden="true"></i>

            </div>

            <div className="col3"> 
                <button className="button3"> STEP 3</button> 
                <h3>GET CASH</h3>
                <i class="fa fa-money fa-4x" aria-hidden="true"></i>

            </div>
            </div>

        

        
        </div>

    )
} 

