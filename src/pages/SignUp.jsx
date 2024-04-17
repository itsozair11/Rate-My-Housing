import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Auth.js';
import React, { useState } from 'react'


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                console.log(userCredential);
            }
        ).catch((error) => {
            alert(error)
        }

        )
    }

    return (
        <div className="sign-in">
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}>

                </input>
                <input type="password" placeholder="Enter your passwword" value={password} onChange={(e) => setPassword(e.target.value)}>

                </input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignUp;