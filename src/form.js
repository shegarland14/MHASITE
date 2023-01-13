import React from 'react';
import "./form.css";
import { useState } from 'react';

export default function Form() {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[number, setNumber]=useState("");
    const[year, setYear]=useState("");
    const[bed, setBed]=useState("");
    const[bath, setBath]=useState("");
    const[address, setAddress]=useState("");
    const[moved, setMoved]=useState("");
    
 return (
    <div className="form-container">
        <form>               
            <div className="form-header"> 
               <h2> *Your Property Details </h2>
            </div>
        
            <div className="form-body">    
                <input 
                    type="text"
                    value={name}
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                    />
            
            
                <input 
                    type="text"
                    value={email}
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
            
            
                <input 
                    type="text"
                    value={number}
                    placeholder='Phone Number'
                    onChange={(e) => setNumber(e.target.value)}
                    />
             
            
                <input 
                    type="text"
                    value={year}
                    placeholder='Year'
                    onChange={(e) => setYear(e.target.value)}
                />
            
                <input 
                    type="text"
                    value={bed}
                    placeholder='Bed(s)'
                    onChange={(e) => setBed(e.target.value)}
                />
            <input 
                    type="text"
                    value={bath}
                    placeholder='Bath(s)'
                    onChange={(e) => setBath(e.target.value)}
                />
                <input 
                    type="text"
                    value={address}
                    placeholder='Property Address'
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input 
                    type="text"
                    value={moved}
                    placeholder='Needs To Be Moved?'
                    onChange={(e) => setMoved(e.target.value)}
                />
               </div>
            <div class="form-footer"> 
                <a href="/"> 
                    <button> Get My Fair Cash Offer </button>
                </a>
            </div>
        
     </form>
</div>
 )
}