import React from 'react';
import './faq.css';

export default function Faq(){
    return(
        <div className="faq">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>    
                <h2 className="faq-info" >Selling a mobile home often comes with a number of questions.<br/>
                     When will the property sell? How much will I get? 
                     What will it cost me? <br/>Below, we offer answers to some of our most frequently asked questions. 
                    <br/>If there is anything else you would like to know, do not be afraid to reach out!<br/> (803) 848-7472</h2>
                <div className="questions">                
                <h3><span>Q:</span>  I was thinking about making some upgrades to my home.<br/>
                     Should I do that before you come and see it?
                </h3><br/>
                <h3><span>Q:</span>  I am selling my mobile home, but NOT my land.<br/>
                    Do you guys buy homes that need to be moved too?
                </h3><br/>
                <h3><span>Q:</span>  Do you only buy junk mobile homes?</h3><br/>
                <h3><span>Q:</span>  How soon can you make me an offer?</h3><br/>
                </div> 
        </div>
    )}
