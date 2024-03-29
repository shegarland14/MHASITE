import React from 'react';
import "./form.css";
import { useState } from 'react';

export default function Form() {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        number: '',
        year: '',
        beds: '' ,
        baths: '',
        address: '',
        moved: '',
        })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails((prev) => {
            return {...prev, [name]: value}
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details)
    };
    
 return (
    <div className="form-container">
        <form onSubmit = {handleSubmit}>               
            <div className="form-header"> 
               <h2> *Your Property Details </h2>
            </div>
        
            <div className="form-body">    
                <input type="text" name = 'name' placeholder='Name' onChange ={handleChange}/>
                <input type="text" name = 'email' placeholder='Enter Your Email'onChange ={handleChange}/>
                <input type="text" name = 'number' placeholder='Enter Your Number'onChange ={handleChange}/>
                <input type="text" name = 'year' placeholder='Year'onChange ={handleChange}/>
                <input type="text" name = 'beds' placeholder='bed(s)'onChange ={handleChange}/>
                <input type="text" name = 'baths' placeholder='bath(s)'onChange ={handleChange}/>
                <input type="text" name = 'address' placeholder='address'onChange ={handleChange}/>
                <input type="text" name = 'moved' placeholder='Needs to be Moved?'onChange ={handleChange}/>


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
