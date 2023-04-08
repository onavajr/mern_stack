import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,    // this is shortcut syntax for firstName: firstName,
            lastName      // this is shortcut syntax for lastName: lastName
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
        <p>Submit <form action=""></form></p>
    )
}
export default PersonForm;


// import {useState} from 'react';

// const Form = (props) => {
//     const [name, setName] = useState("");
//     const [price, setPrice] = useState(0);
//     const [description, setDescription] = useState("");
//     return (
//         <div>
//             <h1>Form Components</h1>

//             <form>
//                 <div>
//                     <label>Name</label>
//                     <input onChangetype = {(e) => setName(e.target.value)} type='text'/>
//                 </div>
//                 <div>
//                     <label>Name</label>
//                     <input type='text'/>
//                 </div>
//                 <div>
//                     <label>Name</label>
//                     <input type='text'/>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Form;