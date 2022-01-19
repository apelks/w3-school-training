import './Form.css';
import React, { useState } from 'react';
import Registration from './Registration';


const Form = () =>{

        const [enteredEmail,setEnteredEmail] = useState('');
        const [enteredPassword,setEnteredPassword] = useState('');
        const [showForm,setShowForm] = useState(false);

        const addUser = (event) =>{

            if(enteredEmail === "ikeshav03@gmail.com" && enteredPassword === "1234"){

                setShowForm(true);
                console.log(enteredEmail);
                console.log(enteredPassword);
            }

            event.preventDefault();   
        }

        const emailChange = (event) => {
            setEnteredEmail(event.target.value);
        }

        const passwordChange = (event) => {
            setEnteredPassword(event.target.value);
        }

    return (
        <>
            {showForm ? null :  <form className="log-in" onSubmit={addUser}>
            <div className="email-id">
            <label htmlFor="email">Enter Email:</label>
            <input type="text" id="email" onChange={emailChange}/>
            </div>

            <div className="pass-id">
            <label htmlFor="password">Enter Password</label>
            <input type="password" id = "password" onChange={passwordChange}/>
            </div>

            <div className="log-btn">
            <button type="submit">Log In</button>
            </div>

        </form> }
       

        { showForm ? <Registration/> : null }
        
  </>
    );
  
};

export default Form;