import React from "react";
import { useState } from "react";
import validation from "../../validation";


export default function Form({login}) {

    const [userData, setUserData] = useState({
        email:'',
        password: '',
     });

    const [errors,setErrors] = useState({
        email:'',
        password:'',
     })

    const handleChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validation({...userData, [property]: value}))
        setUserData({...userData, [property]: value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
     }

    return(
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="text" 
                name="email" 
                value={userData.email}
                onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password" 
                name="password" 
                value={userData.password} 
                onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
        </div>         

                    
        {Object.keys(errors).length === 0 && <button>Submit</button>}

        </form>

    )
}